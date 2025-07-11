import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchSummaryData } from "../../services/batteryApi.js";
import AppBarNav from "../appBarNav/AppBarNav.jsx";
import OnboardingDialog from "../onboarding/OnboardingDialog.Component.jsx";
import BatteryGrid from "./BatteryGrid.Component.jsx";
import DashboardControls from "./DashboardControls.Component.jsx";

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
        {/* --- Dashboard Controls --- */}
        <DashboardControls
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
          compact={compact}
          setCompact={setCompact}
          reverse={reverse}
          setReverse={setReverse}
        />

        {/* --- Battery Grid ---  */}
        <BatteryGrid
          batteries={sortedBatteries}
          originalBatteries={originalBatteries}
          rankings={{
            durability: durabilityRanks,
            resilience: resilienceRanks,
            balanced: balancedRanks,
          }}
          selectedFilter={selectedFilter}
          compact={compact}
        />
      </Box>

      <OnboardingDialog open={showOnboarding} onClose={handleCloseOnboarding} />
    </>
  );
}
