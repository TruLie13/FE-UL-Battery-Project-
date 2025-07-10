import {
  Box,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Tooltip,
} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import SwapVertIcon from "@mui/icons-material/SwapVert";

export default function DashboardActionBar({
  compact,
  setCompact,
  fixedHeaderHeight,
  reverse,
  setReverse,
  children,
}) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: fixedHeaderHeight,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar + 1,
        bgcolor: "background.default",
        boxShadow: 2,
        py: 1,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Tooltip title={reverse ? "Show best first" : "Show worst first"}>
            <IconButton
              aria-label="Reverse order"
              onClick={() => setReverse((v) => !v)}
              size="large"
              sx={{
                color: reverse ? "#2196f3" : "rgba(255,255,255,0.7)",
                border: "1px solid",
                borderColor: reverse ? "#2196f3" : "rgba(255,255,255,0.2)",
                backgroundColor: reverse ? "rgba(33,150,243,0.08)" : "none",
                borderRadius: 2,
                transition: "all 0.2s",
                "&:hover": {
                  borderColor: "#2196f3",
                  color: "#2196f3",
                  backgroundColor: "rgba(33,150,243,0.12)",
                },
                "&.Mui-focusVisible": {
                  outline: "none",
                  boxShadow: "none",
                  border: "1px solid #2196f3",
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              <SwapVertIcon />
            </IconButton>
          </Tooltip>

          {/* View toggle */}
          <ToggleButtonGroup
            value={compact ? "compact" : "full"}
            exclusive
            onChange={(_, val) => {
              if (val !== null) setCompact(val === "compact");
            }}
            aria-label="View mode"
            sx={{
              "& .MuiToggleButton-root": {
                p: 1,
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "none",
                borderRadius: 0,
                "&.Mui-selected": {
                  color: "#2196f3",
                  backgroundColor: "rgba(33,150,243,0.08)",
                  border: "1px solid #2196f3",
                },
                "&:first-of-type": {
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                },
                "&:last-of-type": {
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                },
                "&.Mui-focusVisible": {
                  outline: "none",
                  boxShadow: "none",
                  border: "1px solid #2196f3",
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              },
            }}
          >
            <ToggleButton value="full" aria-label="Full view">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="compact" aria-label="Compact view">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          {children}
        </Box>
      </Container>
    </Box>
  );
}
