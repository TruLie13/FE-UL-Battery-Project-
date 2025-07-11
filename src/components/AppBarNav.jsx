import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppBarNav({ title = "App Title", onMenuClick }) {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{
        minHeight: 48,
        height: 48,
        justifyContent: "center",
        // Use the theme's background color for consistency
        bgcolor: "background.paper",
      }}
    >
      {/* Use the same Container as your main content to ensure alignment */}
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, sm: 48 }, // Adjust height for mobile
            height: { xs: 56, sm: 48 },
            // Apply padding directly for better control
            px: { xs: 1, sm: 2 },
            position: "relative",
          }}
        >
          {/* Hamburger menu on the left */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            // Remove edge="start" and control spacing with sx
            sx={{
              // No margin needed, padding is handled by the Toolbar
              "&:focus": { outline: "none" },
              "&.Mui-focusVisible": { outline: "none", boxShadow: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Centered title */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)", // Precise centering
              pointerEvents: "none", // Makes the box non-interactive
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                color: "text.primary",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
