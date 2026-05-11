import { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SchoolIcon from "@mui/icons-material/School";

export default function Navbar({ drawerOpen, onMenuClick, mode, onModeChange, onNavigate }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuNavigate = (nextPage) => {
    onNavigate(nextPage);
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ minHeight: 68 }}>
        <IconButton
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, bgcolor: "action.hover" }}
          aria-label={drawerOpen ? "close drawer" : "open drawer"}
        >
          <MenuIcon />
        </IconButton>
        <Avatar sx={{ width: 36, height: 36, bgcolor: "primary.main", mr: 1.5 }}>
          <SchoolIcon fontSize="small" />
        </Avatar>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h6" component="h1" noWrap>
            Course Registration App
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            ITI Material UI practice
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}>
          {mode === "light" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          <Switch size="small" checked={mode === "dark"} onChange={onModeChange} />
        </Stack>

        <Tooltip title="Notifications">
          <IconButton sx={{ mr: 1 }}>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Box>
          <Tooltip title="Account menu">
            <IconButton
              onClick={(event) => setAnchorEl(event.currentTarget)}
              aria-label="account menu"
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: "secondary.main" }}>M</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={() => handleMenuNavigate("profile")}>Profile</MenuItem>
            <MenuItem onClick={() => handleMenuNavigate("settings")}>Settings</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
