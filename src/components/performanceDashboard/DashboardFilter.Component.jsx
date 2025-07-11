import BalanceIcon from "@mui/icons-material/Balance";
import DiamondIcon from "@mui/icons-material/Diamond";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

// const filterDescriptions = {
//   durability_score:
//     "Durability: How many times you can use the battery before it wears out.",
//   resilience_score:
//     "Resilience: How much of its original power the battery keeps as it ages.",
//   balanced_score:
//     "Balanced: How long the battery lasts and how much power it keeps.",
// };

export default function DashboardFilter({ selectedFilter, onChange }) {
  return (
    <Container maxWidth="md">
      {/* <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{
          p: 1,
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        {filterDescriptions[selectedFilter]}
      </Typography> */}
      <ToggleButtonGroup
        value={selectedFilter}
        exclusive
        onChange={onChange}
        aria-label="Performance filter"
        color="primary"
        sx={{
          mt: 0,
          mb: 1,
          p: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          "@media (max-width: 600px)": {
            "& .MuiToggleButton-root": {
              fontSize: "0.9rem",
              minWidth: "80px",
              "& .MuiSvgIcon-root": {
                fontSize: "1rem",
              },
            },
          },
          "& .MuiToggleButton-root": {
            color: "rgba(255, 255, 255, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            "&:hover": {
              border: "1px solid rgba(255, 255, 255, 0.5)",
              color: "rgba(255, 255, 255, 0.8)",
            },
            "&.Mui-selected": {
              border: "1px solid rgba(255, 255, 255, 0.7)",
              color: "#ffffff",
              "& .MuiSvgIcon-root": {
                color: "#2196f3",
              },
              "&:focus": {
                outline: "none !important",
                boxShadow: "none !important",
                border: "1px solid rgba(255, 255, 255, 0.7)",
              },
            },
            "&:focus": {
              outline: "none !important",
              boxShadow: "none !important",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            },
            "&:focus-visible": {
              outline: "none !important",
              boxShadow: "none !important",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            },
            // Remove tap highlight on mobile
            WebkitTapHighlightColor: "transparent",
          },
        }}
      >
        <ToggleButton value="durability_score">
          <DiamondIcon sx={{ mr: 1 }} /> Durability
        </ToggleButton>
        <ToggleButton value="resilience_score">
          <TrendingUpIcon sx={{ mr: 1 }} /> Resilience
        </ToggleButton>
        <ToggleButton value="balanced_score">
          <BalanceIcon sx={{ mr: 1 }} /> Balanced
        </ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
}
