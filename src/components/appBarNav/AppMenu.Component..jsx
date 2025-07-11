import AssignmentIcon from "@mui/icons-material/Assignment";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StorageIcon from "@mui/icons-material/Storage";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

export default function AppMenu({ anchorEl, onClose, onShowOnboarding }) {
  const open = Boolean(anchorEl);

  const handleShowOnboardingClick = () => {
    onShowOnboarding();
    onClose();
  };

  return (
    <Menu
      id="app-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          minWidth: 220,
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      {/* --- Internal Section --- */}
      <MenuItem onClick={handleShowOnboardingClick}>
        <ListItemIcon>
          <AssignmentIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Show Onboarding</ListItemText>
      </MenuItem>

      <Divider />

      {/* --- Data Source Section --- */}
      <MenuItem
        component="a"
        href="https://zenodo.org/records/7658813"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        <ListItemIcon>
          <StorageIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Battery Data Source</ListItemText>
        <LaunchIcon sx={{ fontSize: 14, ml: 1, color: "text.secondary" }} />
      </MenuItem>

      <Divider />

      {/* --- Code Repositories Section --- */}
      <MenuItem
        component="a"
        href="https://github.com/TruLie13/FE-UL-Battery-Project-"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        <ListItemIcon>
          <GitHubIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>FE Repo</ListItemText>
        <LaunchIcon sx={{ fontSize: 14, ml: 1, color: "text.secondary" }} />
      </MenuItem>

      <MenuItem
        component="a"
        href="https://github.com/TruLie13/BE-UL-Battery-Project"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        <ListItemIcon>
          <GitHubIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>BE Repo</ListItemText>
        <LaunchIcon sx={{ fontSize: 14, ml: 1, color: "text.secondary" }} />
      </MenuItem>

      <Divider />

      {/* --- Contact Section --- */}
      <MenuItem
        component="a"
        href="https://www.linkedin.com/in/jzayan/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        <ListItemIcon>
          <LinkedInIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Zayan LinkedIn</ListItemText>
        <LaunchIcon sx={{ fontSize: 14, ml: 1, color: "text.secondary" }} />
      </MenuItem>
    </Menu>
  );
}
