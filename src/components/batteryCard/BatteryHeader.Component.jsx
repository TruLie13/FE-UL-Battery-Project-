import { Box, Grid, Typography, alpha, Stack } from "@mui/material";
import InfoTooltip from "../tooltip/InfoTooltip.Component.jsx";

export default function BatteryHeader({
  displayIdentifier,
  voltageType,
  cRate,
  stressTest,
  compact,
}) {
  const formatLabel = (text) => {
    if (typeof text !== "string" || !text) return "N/A";
    return text.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <Box
      sx={{
        p: 1.5,
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.07),
        textAlign: "center",
      }}
    >
      {/* Battery Name Row */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          mb: 1,
        }}
      >
        {displayIdentifier}
      </Typography>

      {!compact && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          mb={1}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="text.primary"
          >
            Test Conditions
          </Typography>
          <InfoTooltip tooltipKey="test_conditions" />
        </Stack>
      )}

      {/* Data Row */}
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Typography variant="h6" fontWeight={600} color="text.primary">
            {formatLabel(voltageType)}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Voltage Type
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" fontWeight={600} color="text.primary">
            {cRate}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            C Rate
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" fontWeight={600} color="text.primary">
            {stressTest}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Stress Test
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
