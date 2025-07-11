import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AppMenu from "./AppMenu.Component.";

export default function AppBarNav({ title = "App Title", onShowOnboarding }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{
        minHeight: 48,
        height: 48,
        justifyContent: "center",
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, sm: 48 },
            height: { xs: 56, sm: 48 },
            px: { xs: 1, sm: 2 },
            position: "relative",
          }}
        >
          {/*  --- Hamburger menu --- */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{
              "&:focus": { outline: "none" },
              "&.Mui-focusVisible": { outline: "none", boxShadow: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* --- Menu Component --- */}
          <AppMenu
            anchorEl={anchorEl}
            onClose={handleClose}
            onShowOnboarding={onShowOnboarding}
          />

          {/* --- Centered title --- */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
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
