import { Box, Container } from "@mui/material";
import DashboardFilter from "./DashboardFilter.Component.jsx";
import DashboardActionBar from "./DashboardActionBar.jsx";

const APPBAR_HEIGHT = 56;

export default function DashboardControls({
  selectedFilter,
  onFilterChange,
  compact,
  setCompact,
  reverse,
  setReverse,
}) {
  return (
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
              onChange={onFilterChange}
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
  );
}
