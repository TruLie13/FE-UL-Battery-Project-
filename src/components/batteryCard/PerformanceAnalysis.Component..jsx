import { Box, Stack, Typography, alpha } from "@mui/material";
import InfoTooltip from "../ui/tooltop/InfoTooltip.Component.jsx";
import PerformanceScoreDisplay from "../ui/PerformanceScoreDisplay.Component.jsx";

export default function PerformanceAnalysis({
  durabilityScore,
  resilienceScore,
  balancedScore,
  rankings,
  selectedFilter,
  compact,
}) {
  const statConfigs = [
    {
      key: "durability_score",
      label: "Durability",
      score: durabilityScore,
      rank: rankings.durability,
    },
    {
      key: "resilience_score",
      label: "Resilience",
      score: resilienceScore,
      rank: rankings.resilience,
    },
    {
      key: "balanced_score",
      label: "Balanced",
      score: balancedScore,
      rank: rankings.balanced,
    },
  ];

  const getSelectedStat = () =>
    statConfigs.find((s) => s.key === selectedFilter) || statConfigs[0];

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        pt: { md: 1 },
        pb: { md: 1 },
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
      }}
    >
      {!compact && (
        <Stack direction="row" alignItems="center" spacing={0} mb={1}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="text.primary"
          >
            Performance Analysis
          </Typography>
          <InfoTooltip tooltipKey="performance_analysis" />
        </Stack>
      )}

      <Stack spacing={1}>
        {compact ? (
          <PerformanceScoreDisplay
            label={getSelectedStat().label}
            score={getSelectedStat().score}
            rank={getSelectedStat().rank}
          />
        ) : (
          statConfigs
            .slice()
            .sort((a, b) =>
              a.key === selectedFilter ? -1 : b.key === selectedFilter ? 1 : 0
            )
            .map((stat) => (
              <PerformanceScoreDisplay
                key={stat.key}
                label={stat.label}
                score={stat.score}
                rank={stat.rank}
              />
            ))
        )}
      </Stack>
    </Box>
  );
}
