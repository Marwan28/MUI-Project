import { useMemo, useState } from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#0f766e",
    },
    background: {
      default: mode === "light" ? "#eef3f8" : "#101827",
      paper: mode === "light" ? "#ffffff" : "#172033",
    },
    text: {
      primary: mode === "light" ? "#111827" : "#f8fafc",
      secondary: mode === "light" ? "#64748b" : "#cbd5e1",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h4: {
      letterSpacing: 0,
    },
    h6: {
      letterSpacing: 0,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
        },
      },
    },
  },
});

export default function Day2Project() {
  const [page, setPage] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const renderPage = () => {
    if (page === "courses") return <Courses />;
    if (page === "register") return <Register />;
    if (page === "profile") return <Profile />;
    if (page === "settings") return <Settings />;
    return <Home />;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          bgcolor: "background.default",
          textAlign: "left",
        }}
      >
        <Navbar
          drawerOpen={drawerOpen}
          onMenuClick={() => setDrawerOpen(!drawerOpen)}
          mode={mode}
          onModeChange={() => setMode((currentMode) => (currentMode === "light" ? "dark" : "light"))}
          onNavigate={setPage}
        />
        <Sidebar
          page={page}
          setPage={setPage}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          isDesktop={isDesktop}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, md: 3 },
            width: "100%",
            minWidth: 0,
          }}
        >
          <Toolbar />
          <Box sx={{ maxWidth: 1180, mx: "auto" }}>{renderPage()}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
