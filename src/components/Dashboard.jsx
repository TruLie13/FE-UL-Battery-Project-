import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchSummaryData } from "../services/batteryApi";
import BatteryCard from "./BatteryCard";
import DashboardFilter from "./DashboardFilter.jsx";

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

function Dashboard() {
  const [originalBatteries, setOriginalBatteries] = useState([]);
  const [sortedBatteries, setSortedBatteries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("durability_score");

  const fixedHeaderRef = useRef(null);
  const [fixedHeaderHeight, setFixedHeaderHeight] = useState(0);
  const scrollPositionRef = useRef(0);

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

  const saveScrollPosition = useCallback(() => {
    scrollPositionRef.current = window.scrollY;
  }, []);

  const restoreScrollPosition = useCallback(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPositionRef.current);
    });
  }, []);

  useEffect(() => {
    if (originalBatteries.length > 0) {
      const sorted = [...originalBatteries].sort((a, b) => {
        const scoreA = a[selectedFilter];
        const scoreB = b[selectedFilter];
        return scoreB - scoreA;
      });
      setSortedBatteries(sorted);

      if (scrollPositionRef.current > 0) {
        restoreScrollPosition();
      }
    }
  }, [originalBatteries, selectedFilter, restoreScrollPosition]);

  useEffect(() => {
    if (fixedHeaderRef.current) {
      setFixedHeaderHeight(fixedHeaderRef.current.offsetHeight);
    }
  }, [isLoading]);

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      saveScrollPosition();
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
          <Typography variant="6" gutterBottom>
            Error: {error}
          </Typography>
          <Typography>Is your Django backend server running?</Typography>
        </Alert>
      </Box>
    );
  }

  // Calculate rankings for each metric
  const durabilityRanks = getRankings(originalBatteries, "durability_score");
  const resilienceRanks = getRankings(originalBatteries, "resilience_score");
  const balancedRanks = getRankings(originalBatteries, "balanced_score");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Start dashboard header - Dashboard Title and Filter */}
      <Box
        ref={fixedHeaderRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.appBar + 1,
          bgcolor: "background.default",
          boxShadow: 3,
          py: 2,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
          >
            Battery Performance Dashboard
          </Typography>
          <DashboardFilter
            selectedFilter={selectedFilter}
            onChange={handleFilterChange}
          />
        </Container>
      </Box>

      {/* Start dashboard body - Battery Card section */}
      <Box
        sx={{
          flexGrow: 1,
          pt: `${fixedHeaderHeight}px`,
          pb: 4,
          mt: 3,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
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
                    balanced: balancedRanks[originalBatteries.indexOf(battery)],
                  }}
                  selectedFilter={selectedFilter}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
