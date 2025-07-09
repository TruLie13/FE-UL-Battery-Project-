import {
  Box,
  LinearProgress,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";

// Helper for ordinal suffix
const ordinalSuffix = (n) => {
  if (n === 1) return "1st";
  if (n === 2) return "2nd";
  if (n === 3) return "3rd";
  if (n % 10 === 1 && n !== 11) return `${n}st`;
  if (n % 10 === 2 && n !== 12) return `${n}nd`;
  if (n % 10 === 3 && n !== 13) return `${n}rd`;
  return `${n}th`;
};

const getScoreColor = (theme, score) => {
  const scoreValue = parseFloat(score) || 0;
  if (scoreValue >= 0.8) return "success";
  if (scoreValue >= 0.6) return "warning";
  return "error";
};

function PerformanceScoreDisplay({ label, score, rank }) {
  const theme = useTheme();
  const displayScore = typeof score === "number" ? score.toFixed(4) : "-";
  const scoreColorPaletteKey = getScoreColor(theme, score);
  const scoreColorMain =
    theme.palette[scoreColorPaletteKey]?.main || theme.palette.grey[500];

  return (
    <Box
      sx={{
        p: 1.5,
        borderRadius: 2,
        bgcolor: (theme) => alpha(theme.palette.background.default, 0.5),
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center" mb={1}>
        <Typography
          variant="h6"
          fontWeight="bold"
          color={scoreColorMain}
          sx={{ minWidth: 40 }}
        >
          {ordinalSuffix(rank)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          color={scoreColorMain}
          sx={{ ml: "auto" }}
        >
          {displayScore}
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={score * 100}
        color={scoreColorPaletteKey}
        sx={{
          height: 7,
          borderRadius: 3,
          bgcolor: alpha(scoreColorMain, 0.2),
        }}
      />
    </Box>
  );
}

export default function PerformanceAnalysis({
  durabilityScore,
  resilienceScore,
  balancedScore,
  rankings,
  selectedFilter, // <-- Pass this from parent!
}) {
  // Array of stats with keys matching filter values
  const stats = [
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

  // Sort so selectedFilter is first
  stats.sort((a, b) =>
    a.key === selectedFilter ? -1 : b.key === selectedFilter ? 1 : 0
  );

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        color="text.primary"
        mb={2}
      >
        Performance Analysis
      </Typography>
      <Stack spacing={2}>
        {stats.map((stat) => (
          <PerformanceScoreDisplay
            key={stat.key}
            label={stat.label}
            score={stat.score}
            rank={stat.rank}
          />
        ))}
      </Stack>
    </Box>
  );
}
