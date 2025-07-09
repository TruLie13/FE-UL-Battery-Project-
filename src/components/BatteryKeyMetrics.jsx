import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LoopIcon from "@mui/icons-material/Loop";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { Box, Grid, Stack, Typography, alpha } from "@mui/material";

const MetricItem = ({
  icon: Icon,
  label,
  value,
  unit = "",
  valueVariant = "h6",
}) => (
  <Stack
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{
      p: 1.5,
      bgcolor: (theme) => alpha(theme.palette.background.default, 0.5),
      borderRadius: 2,
      minWidth: "120px",
      minHeight: "70px",
      flexShrink: 0,
    }}
  >
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
      mb={0.5}
    >
      <Typography
        variant={valueVariant}
        fontWeight="bold"
        sx={{
          lineHeight: 1.2,
          color: "text.primary",
          textAlign: "center",
        }}
      >
        {value}
      </Typography>
      {unit && value !== "-" && (
        <Typography
          component="span"
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          {unit}
        </Typography>
      )}
    </Stack>
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      justifyContent="center"
    >
      {Icon && <Icon sx={{ color: "text.secondary", fontSize: "1.2rem" }} />}
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </Stack>
  </Stack>
);

const metricGridStyle = {
  minWidth: { xs: "10rem", sm: "10rem", md: "5rem" },
};

export default function BatteryKeyMetrics({
  stateOfHealth,
  cycleCount,
  overallAvgTemp,
  overallAvgDischarge,
}) {
  return (
    <Box
      sx={{
        p: 1.5,
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ margin: "0 auto" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sx={{ ...metricGridStyle }}>
          <MetricItem
            icon={HealthAndSafetyIcon}
            label="State Of Health"
            value={stateOfHealth}
            unit="%"
          />
        </Grid>
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
      </Grid>
    </Box>
  );
}
