import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CourseCard from "../components/CourseCard";
import { courses } from "../data";

const tracks = ["Frontend", "Backend", "UI/UX"];

export default function Courses() {
  const [level, setLevel] = useState("All");
  const [selectedTracks, setSelectedTracks] = useState(["Frontend", "Backend", "UI/UX"]);
  const [courseView, setCourseView] = useState("all");

  const handleTrackChange = (track) => {
    if (selectedTracks.includes(track)) {
      setSelectedTracks(selectedTracks.filter((item) => item !== track));
    } else {
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  const filteredCourses = courses.filter((course) => {
    const sameLevel = level === "All" || course.level === level;
    const sameTrack = selectedTracks.includes(course.track);
    const sameView =
      courseView === "all" ||
      (courseView === "available" && course.seats >= 18) ||
      (courseView === "topRated" && course.rating >= 4.6);

    return sameLevel && sameTrack && sameView;
  });

  return (
    <Stack spacing={3}>
      <Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between">
          <Box>
            <Typography variant="h4" fontWeight={800}>
              Courses
            </Typography>
            <Typography color="text.secondary">Choose a level and track to find your course.</Typography>
          </Box>
          <Chip label={`${filteredCourses.length} courses`} color="primary" variant="outlined" />
        </Stack>
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: 2,
          border: 1,
          borderColor: "divider",
          boxShadow: (theme) =>
            theme.palette.mode === "light" ? "0 12px 30px rgba(15, 23, 42, 0.06)" : "none",
        }}
      >
        <Stack spacing={2}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", sm: "center" }}
            spacing={1}
          >
            <Typography variant="subtitle1" fontWeight={700}>
              Filter Courses
            </Typography>
            <ButtonGroup size="small" variant="outlined" sx={{ alignSelf: { xs: "stretch", sm: "center" } }}>
              <Button onClick={() => setSelectedTracks(tracks)} sx={{ textTransform: "none" }}>
                All Tracks
              </Button>
              <Button onClick={() => setSelectedTracks(["Frontend"])} sx={{ textTransform: "none" }}>
                Frontend
              </Button>
            </ButtonGroup>
          </Stack>

          <Grid container spacing={2} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.75 }}>
                Level
              </Typography>
              <FormControl fullWidth size="small">
              <InputLabel id="level-label">Level</InputLabel>
              <Select labelId="level-label" label="Level" value={level} onChange={(event) => setLevel(event.target.value)}>
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.75 }}>
                Status
              </Typography>
            <ToggleButtonGroup
              exclusive
              fullWidth
              size="small"
              value={courseView}
              sx={{
                "& .MuiToggleButton-root": {
                  textTransform: "none",
                  px: 1.5,
                },
              }}
              onChange={(_, newValue) => {
                if (newValue) setCourseView(newValue);
              }}
            >
              <ToggleButton value="all">All</ToggleButton>
              <ToggleButton value="available">Available</ToggleButton>
              <ToggleButton value="topRated">Top Rated</ToggleButton>
            </ToggleButtonGroup>
          </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.25 }}>
                Tracks
              </Typography>
              <FormGroup row sx={{ gap: { xs: 0, sm: 1 } }}>
              {tracks.map((track) => (
                <FormControlLabel
                  key={track}
                  label={track}
                  sx={{ mr: 1, "& .MuiFormControlLabel-label": { fontSize: 14 } }}
                  control={
                    <Checkbox
                      size="small"
                      checked={selectedTracks.includes(track)}
                      onChange={() => handleTrackChange(track)}
                    />
                  }
                />
              ))}
            </FormGroup>
          </Grid>
          </Grid>
        </Stack>
      </Paper>

      <Grid container spacing={2}>
        {filteredCourses.map((course) => (
          <Grid key={course.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
