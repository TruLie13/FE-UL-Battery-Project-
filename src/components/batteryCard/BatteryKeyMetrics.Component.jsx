import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LoopIcon from "@mui/icons-material/Loop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { Box, Grid, Stack, Typography, alpha } from "@mui/material";
import InfoTooltip from "../ui/tooltop/InfoTooltip.Component.jsx";
import MetricItem from "../ui/MetricItem.jsx";

const metricGridStyle = {
  minWidth: { xs: "10.3rem", sm: "10rem", md: "5rem" },
};

export default function BatteryKeyMetrics({
  stateOfHealth,
  cycleCount,
  overallAvgTemp,
  overallAvgDischarge,
  compact,
}) {
  return (
    <Box
      sx={{
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
      }}
      pt={1.5}
    >
      {!compact && (
        <Stack direction="row" alignItems="center" spacing={0} mb={1}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="text.primary"
            sx={{ ml: { xs: 2, sm: 2, md: "2rem" } }}
          >
            Key Metrics
          </Typography>
          <InfoTooltip tooltipKey="key_metrics" />
        </Stack>
      )}

      <Box
        sx={{
          pb: 1.5,
          pt: 0,
          pr: 0,
          pl: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6} sx={{ ...metricGridStyle }}>
            <MetricItem
              icon={HealthAndSafetyIcon}
              label="State Of Health"
              value={stateOfHealth}
              unit="%"
            />
          </Grid>
          {!compact && (
            <>
              <Grid item xs={6} sx={{ ...metricGridStyle }}>
                <MetricItem icon={LoopIcon} label="Cycles" value={cycleCount} />
              </Grid>
              <Grid item xs={6} sx={{ ...metricGridStyle }}>
                <MetricItem
                  icon={ThermostatIcon}
                  label="Avg Temp"
                  value={overallAvgTemp}
                  unit="°C"
                />
              </Grid>
              <Grid item xs={6} sx={{ ...metricGridStyle }}>
                <MetricItem
                  icon={BatteryChargingFullIcon}
                  label="Avg Discharge"
                  value={overallAvgDischarge}
                  unit="Ah"
                />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
