import { Box, Stack, Typography, alpha } from "@mui/material";

export default function MetricItem({
  icon: Icon,
  label,
  value,
  unit = "",
  valueVariant = "h6",
}) {
  return (
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
}
