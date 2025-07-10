import { Box, Typography, Divider } from "@mui/material";

export const tooltipContent = {
  performance_analysis: {
    title: "Performance Analysis",
    body: (
      <Box sx={{ px: 0.5 }}>
        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          State of Health (SOH)
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Definition:</strong> The ratio of the battery's final
          discharge capacity to its initial discharge capacity, expressed as a
          percentage.
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Formula:</strong>
        </Typography>
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            color: "inherit",
            borderRadius: 1,
            px: 1,
            py: 0.5,
            mb: 1,
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            fontSize: "0.95em",
            width: "100%",
            overflowX: "auto",
          }}
        >
          state_of_health = (final_capacity / initial_capacity) * 100
        </Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Interpretation:</strong> Higher SOH means the battery retains
          more of its original capacity after many cycles.
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          Normalized Metrics
        </Typography>
        <Box sx={{ pl: 3, mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>norm_soh:</strong> Normalized state of health (scaled 0–1
            across all batteries).
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>norm_cycles:</strong> Normalized cycle count (scaled 0–1
            across all batteries).
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          Durability Score
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Formula:</strong>
        </Typography>
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            color: "inherit",
            borderRadius: 1,
            px: 1,
            py: 0.5,
            mb: 1,
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            fontSize: "0.95em",
            width: "100%",
            overflowX: "auto",
          }}
        >
          durability_score = norm_cycles * 0.7 + norm_soh * 0.3
        </Box>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Interpretation:</strong> Emphasizes the total number of
          cycles, but also considers SOH.
        </Typography>
        <Box sx={{ pl: 3, mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            70% weight: Number of cycles completed.
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            30% weight: Capacity retained (SOH).
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          Resilience Score
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Formula:</strong>
        </Typography>
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            color: "inherit",
            borderRadius: 1,
            px: 1,
            py: 0.5,
            mb: 1,
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            fontSize: "0.95em",
            width: "100%",
            overflowX: "auto",
          }}
        >
          resilience_score = norm_cycles * 0.3 + norm_soh * 0.7
        </Box>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Interpretation:</strong> Emphasizes capacity retention (SOH),
          but also considers cycles.
        </Typography>
        <Box sx={{ pl: 3, mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            70% weight: Capacity retained (SOH).
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            30% weight: Number of cycles completed.
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          Balanced Score
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Formula:</strong>
        </Typography>
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            color: "inherit",
            borderRadius: 1,
            px: 1,
            py: 0.5,
            mb: 1,
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            fontSize: "0.95em",
            width: "100%",
            overflowX: "auto",
          }}
        >
          balanced_score = norm_cycles * 0.5 + norm_soh * 0.5
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Interpretation:</strong> Gives equal weight to both cycle
          count and SOH.
        </Typography>
      </Box>
    ),
  },
  key_metrics: {
    title: "Key Metrics",
    body: (
      <Box sx={{ px: 0.5 }}>
        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          State of Health (SOH)
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Definition:</strong> The percentage of original battery
          capacity remaining.
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <strong>Formula:</strong>
        </Typography>
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            color: "inherit",
            borderRadius: 1,
            px: 1,
            py: 0.5,
            mb: 1,
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            fontSize: "0.95em",
            width: "100%",
            overflowX: "auto",
          }}
        >
          state_of_health = (final_capacity / initial_capacity) × 100
        </Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Interpretation:</strong> Higher SOH means the battery retains
          more of its original capacity after many cycles.
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          Cycles
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Definition:</strong> The total number of full charge/discharge
          cycles the battery has completed.
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Interpretation:</strong> More cycles indicate longer battery
          use, but may also mean more wear.
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          Average Temperature
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Definition:</strong> The average operating temperature of the
          battery during its cycles.
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Interpretation:</strong> Extreme temperatures can reduce
          battery life and performance.
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" fontWeight={700} gutterBottom>
          Average Discharge
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Definition:</strong> The average amount of energy (capacity)
          discharged per cycle.
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Interpretation:</strong> Indicates typical usage and can be
          used to compare battery performance.
        </Typography>
      </Box>
    ),
  },
};
