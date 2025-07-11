import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function DashboardDrawer({ open, onClose, onShowOnboarding }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 240, p: 2 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                onShowOnboarding();
                onClose();
              }}
            >
              <ListItemText primary="Show Onboarding" />
            </ListItemButton>
          </ListItem>
          {/* Add more links */}
        </List>
      </Box>
    </Drawer>
  );
}
