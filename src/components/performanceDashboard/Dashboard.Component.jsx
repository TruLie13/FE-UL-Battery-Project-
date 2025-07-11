import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchSummaryData } from "../../services/batteryApi.js";
import AppBarNav from "../appBarNav/AppBarNav.jsx";
import BatteryCard from "../batteryCard/BatteryCard.Component.jsx";
import OnboardingDialog from "../onboarding/OnboardingDialog.Component.jsx";
import DashboardActionBar from "./DashboardActionBar.jsx";
import DashboardFilter from "./DashboardFilter.Component.jsx";

function getRankings(batteries, metric) {
  const sorted = [...batteries]
    .map((b, idx) => ({ ...b, origIdx: idx }))
    .sort((a, b) => b[metric] - a[metric]);
  const ranks = Array(batteries.length);
  sorted.forEach((b, i) => {
    ranks[b.origIdx] = i + 1;
  });
  return ranks;
}

export default function Dashboard() {
  const [originalBatteries, setOriginalBatteries] = useState([]);
  const [sortedBatteries, setSortedBatteries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("durability_score");
  const [compact, setCompact] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(
    () => !localStorage.getItem("onboardingComplete")
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    const getSummary = async () => {
      try {
        const data = await fetchSummaryData();
        setOriginalBatteries(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getSummary();
  }, []);

  useEffect(() => {
    if (originalBatteries.length > 0) {
      let sorted = [...originalBatteries].sort((a, b) => {
        const scoreA = a[selectedFilter];
        const scoreB = b[selectedFilter];
        return scoreB - scoreA;
      });
      if (reverse) {
        sorted = sorted.reverse();
      }
      setSortedBatteries(sorted);
    }
  }, [originalBatteries, selectedFilter, reverse]);

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setSelectedFilter(newFilter);
    }
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        p={3}
      >
        <Alert severity="error" sx={{ maxWidth: 500 }}>
          <Typography variant="h6" gutterBottom>
            Error: {error}
          </Typography>
          <Typography>Is Django backend server running?</Typography>
        </Alert>
      </Box>
    );
  }

  const durabilityRanks = getRankings(originalBatteries, "durability_score");
  const resilienceRanks = getRankings(originalBatteries, "resilience_score");
  const balancedRanks = getRankings(originalBatteries, "balanced_score");

  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem("onboardingComplete", "true");
  };

  const APPBAR_HEIGHT = 56;

  const handleShowOnboarding = () => setShowOnboarding(true);

  return (
    <>
      {/* --- NavBar --- */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <AppBarNav
          title="Battery Dashboard"
          onMenuClick={handleMenuClick}
          onShowOnboarding={handleShowOnboarding}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          bgcolor: "background.default",
        }}
      >
        {/* --- Unified Controls: Filter + Action Bar combined --- */}
        <Box
          sx={{
            position: "sticky",
            top: `${APPBAR_HEIGHT}px`,
            zIndex: (theme) => theme.zIndex.appBar - 1,
            bgcolor: "background.default",
            boxShadow: 3,
            py: 2,
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
              {/* --- Filter Buttons ---  */}
              <Box sx={{ textAlign: "center" }}>
                <DashboardFilter
                  selectedFilter={selectedFilter}
                  onChange={handleFilterChange}
                />
              </Box>

              {/* --- Action Buttons --- */}
              <Box sx={{ alignSelf: "flex-end" }}>
                <DashboardActionBar
                  compact={compact}
                  setCompact={setCompact}
                  reverse={reverse}
                  setReverse={setReverse}
                />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ---  Scrollable Battery Cards Section ---  */}
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            pt: 3,
            pb: 4,
          }}
        >
          <Container maxWidth="md">
            <Grid container spacing={3} justifyContent="center">
              {sortedBatteries.map((battery) => (
                <Grid
                  item
                  key={`${battery.id}-${selectedFilter}`}
                  xs={12}
                  sx={{ width: "100%", maxWidth: "600px" }}
                >
                  <BatteryCard
                    battery={battery}
                    rankings={{
                      durability:
                        durabilityRanks[originalBatteries.indexOf(battery)],
                      resilience:
                        resilienceRanks[originalBatteries.indexOf(battery)],
                      balanced:
                        balancedRanks[originalBatteries.indexOf(battery)],
                    }}
                    selectedFilter={selectedFilter}
                    compact={compact}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <OnboardingDialog open={showOnboarding} onClose={handleCloseOnboarding} />
    </>
  );
}
