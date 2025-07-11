// src/components/ui/PerformanceScoreDisplay.jsx

import {
  Box,
  LinearProgress,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";

// Utility functions
const ordinalSuffix = (n) => {
  if (n === 1) return "1st";
  if (n === 2) return "2nd";
  if (n === 3) return "3rd";
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  const j = n % 10;
  if (j === 1) return `${n}st`;
  if (j === 2) return `${n}nd`;
  if (j === 3) return `${n}rd`;
  return `${n}th`;
};

const getScoreColor = (score) => {
  const scoreValue = parseFloat(score) || 0;
  if (scoreValue >= 0.8) return "success";
  if (scoreValue >= 0.6) return "warning";
  return "error";
};

// Reusable performance metric display
export default function PerformanceScoreDisplay({ label, score, rank }) {
  const theme = useTheme();
  const displayScore = typeof score === "number" ? score.toFixed(4) : "-";
  const scoreColorPaletteKey = getScoreColor(score);
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
