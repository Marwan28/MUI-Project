import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 250;

const pages = [
  { id: "home", label: "Home", icon: <HomeIcon /> },
  { id: "courses", label: "Courses", icon: <MenuBookIcon /> },
  { id: "register", label: "Register", icon: <PersonAddIcon /> },
  { id: "profile", label: "Profile", icon: <AccountCircleIcon /> },
  { id: "settings", label: "Settings", icon: <SettingsIcon /> },
];

export default function Sidebar({
  page,
  setPage,
  drawerOpen,
  setDrawerOpen,
  isDesktop,
}) {
  const drawerContent = (
    <Box sx={{ height: "100%" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Typography fontWeight={800}>Menu</Typography>
          <Typography variant="caption" color="text.secondary">
            Day 2 project
          </Typography>
        </Box>
        <IconButton onClick={() => setDrawerOpen(false)} aria-label="close drawer">
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List sx={{ p: 1 }}>
        {pages.map((item) => (
          <ListItemButton
            key={item.id}
            selected={page === item.id}
            onClick={() => {
              setPage(item.id);
              if (!isDesktop) {
                setDrawerOpen(false);
              }
            }}
            sx={{
              borderRadius: 1,
              mb: 0.75,
              "&.Mui-selected": {
                bgcolor: "primary.main",
                color: "primary.contrastText",
                "& .MuiListItemIcon-root": {
                  color: "primary.contrastText",
                },
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: drawerOpen ? drawerWidth : 0 },
        flexShrink: { md: 0 },
        transition: "width 200ms",
      }}
    >
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true, disableScrollLock: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "background.paper",
            borderRight: 1,
            borderColor: "divider",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="persistent"
        open={drawerOpen}
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "background.paper",
            borderRight: 1,
            borderColor: "divider",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
