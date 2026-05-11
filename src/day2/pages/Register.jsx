import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Autocomplete,
  Avatar,
  Box,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Snackbar,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomButton from "../components/CustomButton";
import { courses } from "../data";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courseId: "",
    courseName: "",
    attendance: "online",
    agree: false,
    notifications: true,
    confidence: 3,
    weeklyHours: 6,
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDialogOpen(true);
    setSnackbarOpen(true);
  };

  const selectedCourse = courses.find((course) => course.id === formData.courseId);

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={800}>
          Register
        </Typography>
        <Typography color="text.secondary">Fill the form to register in an ITI course.</Typography>
      </Box>

      <Grid container spacing={2} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 8 }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{
          p: 3,
          border: 1,
          borderColor: "divider",
          boxShadow: (theme) =>
            theme.palette.mode === "light" ? "0 12px 30px rgba(15, 23, 42, 0.06)" : "none",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              required
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              required
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Autocomplete
              freeSolo
              options={courses}
              value={selectedCourse || formData.courseName}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.title
              }
              onChange={(_, newValue) => {
                if (typeof newValue === "string") {
                  setFormData({ ...formData, courseId: "", courseName: newValue });
                } else {
                  setFormData({
                    ...formData,
                    courseId: newValue ? newValue.id : "",
                    courseName: newValue ? newValue.title : "",
                  });
                }
              }}
              onInputChange={(_, newInputValue) => {
                setFormData((prev) => ({
                  ...prev,
                  courseId:
                    selectedCourse && selectedCourse.title === newInputValue
                      ? selectedCourse.id
                      : "",
                  courseName: newInputValue,
                }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Course" required fullWidth />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl>
              <FormLabel>Attendance Type</FormLabel>
              <RadioGroup row name="attendance" value={formData.attendance} onChange={handleChange}>
                <FormControlLabel value="online" control={<Radio />} label="Online" />
                <FormControlLabel value="offline" control={<Radio />} label="Offline" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography>React confidence</Typography>
              <Rating
                value={formData.confidence}
                onChange={(_, newValue) => setFormData({ ...formData, confidence: newValue || 0 })}
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={1}>
              <Typography>Weekly study hours: {formData.weeklyHours}</Typography>
              <Slider
                value={formData.weeklyHours}
                onChange={(_, newValue) =>
                  setFormData({ ...formData, weeklyHours: newValue })
                }
                step={1}
                marks
                min={2}
                max={12}
                valueLabelDisplay="auto"
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.notifications}
                  onChange={handleChange}
                  name="notifications"
                />
              }
              label="Enable notifications"
            />
          </Grid>

          <Grid size={12}>
            <FormControlLabel
              control={<Checkbox checked={formData.agree} onChange={handleChange} name="agree" />}
              label="I agree to the registration rules"
            />
          </Grid>

          <Grid size={12}>
            <CustomButton type="submit" variant="contained" disabled={!formData.agree}>
              Submit Registration
            </CustomButton>
          </Grid>
        </Grid>
      </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={2}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                border: 1,
                borderColor: "divider",
                boxShadow: (theme) =>
                  theme.palette.mode === "light" ? "0 12px 30px rgba(15, 23, 42, 0.06)" : "none",
              }}
            >
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Avatar sx={{ width: 72, height: 72, bgcolor: "primary.main", fontSize: 28 }}>
                  {(formData.name || "S")[0].toUpperCase()}
                </Avatar>
                <Box>
                  <Typography variant="h6">{formData.name || "Student Name"}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {formData.email || "student@email.com"}
                  </Typography>
                </Box>
                <Divider flexItem />
                <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                  <Chip label={formData.courseName || "No course yet"} size="small" color="primary" />
                  <Chip label={formData.attendance} size="small" variant="outlined" />
                  <Chip label={`${formData.weeklyHours}h/week`} size="small" variant="outlined" />
                </Stack>
              </Stack>
            </Paper>

            <Accordion elevation={0} sx={{ border: 1, borderColor: "divider" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>Registration Notes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  Please choose one course, confirm your attendance type, and keep your
                  weekly study hours realistic so the instructor can follow your progress.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Grid>
      </Grid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Registration Sent</DialogTitle>
        <DialogContent>
          <Typography>
            Thank you {formData.name || "student"}. You registered for{" "}
            {formData.courseName || "the selected course"}.
          </Typography>
        </DialogContent>
        <DialogActions>
          <CustomButton variant="contained" onClick={() => setDialogOpen(false)}>
            Done
          </CustomButton>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSnackbarOpen(false)}>
          Registration completed successfully
        </Alert>
      </Snackbar>
    </Stack>
  );
}
