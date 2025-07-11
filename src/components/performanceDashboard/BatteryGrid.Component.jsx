import { Box, Container, Grid } from "@mui/material";
import BatteryCard from "../batteryCard/BatteryCard.Component.jsx";

export default function BatteryGrid({
  batteries,
  originalBatteries,
  rankings,
  selectedFilter,
  compact,
}) {
  return (
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
          {batteries.map((battery) => (
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
                    rankings.durability[originalBatteries.indexOf(battery)],
                  resilience:
                    rankings.resilience[originalBatteries.indexOf(battery)],
                  balanced:
                    rankings.balanced[originalBatteries.indexOf(battery)],
                }}
                selectedFilter={selectedFilter}
                compact={compact}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
