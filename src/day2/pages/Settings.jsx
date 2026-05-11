import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Snackbar,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import CustomButton from "../components/CustomButton";

export default function Settings() {
  const [tab, setTab] = useState(0);
  const [settings, setSettings] = useState({
    language: "English",
    reminders: true,
    emailUpdates: true,
    practiceHours: 6,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={800}>
          Settings
        </Typography>
        <Typography color="text.secondary">Manage account and learning preferences.</Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          border: 1,
          borderColor: "divider",
          boxShadow: (theme) =>
            theme.palette.mode === "light" ? "0 12px 30px rgba(15, 23, 42, 0.06)" : "none",
        }}
      >
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ px: 2, borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Account" />
          <Tab label="Preferences" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {tab === 0 && (
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Display Name" defaultValue="Marwan Abdelwahab" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Email" defaultValue="marwanabdelwahab28@gmail.com" />
              </Grid>
              <Grid size={12}>
                <Divider sx={{ my: 1 }} />
              </Grid>
              <Grid size={12}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                  <CustomButton variant="contained" onClick={() => setSnackbarOpen(true)}>
                    Save Account
                  </CustomButton>
                  <Button variant="outlined" color="error">
                    Reset Password
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          )}

          {tab === 1 && (
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth>
                  <InputLabel id="language-label">Language</InputLabel>
                  <Select
                    labelId="language-label"
                    label="Language"
                    name="language"
                    value={settings.language}
                    onChange={handleChange}
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Arabic">Arabic</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography gutterBottom>
                  Daily practice hours: {settings.practiceHours}
                </Typography>
                <Slider
                  value={settings.practiceHours}
                  onChange={(_, newValue) =>
                    setSettings({ ...settings, practiceHours: newValue })
                  }
                  min={1}
                  max={10}
                  marks
                  valueLabelDisplay="auto"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.reminders}
                      onChange={handleChange}
                      name="reminders"
                    />
                  }
                  label="Session reminders"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.emailUpdates}
                      onChange={handleChange}
                      name="emailUpdates"
                    />
                  }
                  label="Email updates"
                />
              </Grid>

              <Grid size={12}>
                <CustomButton variant="contained" onClick={() => setSnackbarOpen(true)}>
                  Save Preferences
                </CustomButton>
              </Grid>
            </Grid>
          )}
        </Box>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSnackbarOpen(false)}>
          Settings saved successfully
        </Alert>
      </Snackbar>
    </Stack>
  );
}
