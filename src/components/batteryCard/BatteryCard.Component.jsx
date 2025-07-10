import {
  Card,
  CardContent,
  Divider,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import BatteryHeader from "./BatteryHeader.Component.jsx";
import BatteryKeyMetrics from "./BatteryKeyMetrics.Component.jsx";
import PerformanceAnalysis from "./PerformanceAnalysis.jsx";

function BatteryCard({ battery, rankings, selectedFilter, compact }) {
  const theme = useTheme();

  if (!battery) {
    return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Loading battery data...
        </Typography>
      </Card>
    );
  }

  const getDisplayValue = (value) => {
    if (value === null || value === undefined || value === "") return "-";
    return String(value);
  };

  const getNumericValue = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  };

  const baseFileName = getDisplayValue(battery.file_name);
  const displayIdentifier = baseFileName.split(",")[0].split("_")[0];
  const voltageType = getDisplayValue(battery.voltage_type);
  const cRate = getDisplayValue(battery.c_rate);
  const stressTest = getDisplayValue(battery.stress_test);
  const cycleCount = getDisplayValue(battery.cycle_count);
  const overallAvgTemp = getDisplayValue(battery.overall_avg_temp);
  const overallAvgDischarge = getDisplayValue(battery.overall_avg_discharge);

  const stateOfHealth = getNumericValue(battery.state_of_health);
  const durabilityScore = getNumericValue(battery.durability_score);
  const resilienceScore = getNumericValue(battery.resilience_score);
  const balancedScore = getNumericValue(battery.balanced_score);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        boxShadow: 8,
        overflow: "hidden",
        transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
        bgcolor: "background.paper",
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 0 }}>
        <BatteryHeader
          displayIdentifier={displayIdentifier}
          voltageType={voltageType}
          cRate={cRate}
          stressTest={stressTest}
          compact={compact}
        />
        <Divider
          sx={{ my: 0, borderColor: alpha(theme.palette.divider, 0.1) }}
        />

        <BatteryKeyMetrics
          stateOfHealth={stateOfHealth}
          cycleCount={cycleCount}
          overallAvgTemp={overallAvgTemp}
          overallAvgDischarge={overallAvgDischarge}
          compact={compact}
        />

        <Divider
          sx={{ my: 0, borderColor: alpha(theme.palette.divider, 0.1) }}
        />

        <PerformanceAnalysis
          durabilityScore={durabilityScore}
          resilienceScore={resilienceScore}
          balancedScore={balancedScore}
          rankings={rankings}
          selectedFilter={selectedFilter}
          compact={compact}
        />
      </CardContent>
    </Card>
  );
}

export default BatteryCard;
