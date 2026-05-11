import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SchoolIcon from "@mui/icons-material/School";

const profileCourses = [
  { title: "React Basics", progress: 75, icon: <CodeIcon /> },
  { title: "Material UI", progress: 60, icon: <DesignServicesIcon /> },
  { title: "Final Project", progress: 40, icon: <SchoolIcon /> },
];

export default function Profile() {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={800}>
          Profile
        </Typography>
        <Typography color="text.secondary">Student information and course progress.</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              border: 1,
              borderColor: "divider",
              height: "100%",
              boxShadow: (theme) =>
                theme.palette.mode === "light" ? "0 12px 30px rgba(15, 23, 42, 0.06)" : "none",
            }}
          >
            <Stack spacing={2} alignItems="center" textAlign="center">
              <Avatar sx={{ width: 92, height: 92, bgcolor: "primary.main", fontSize: 34 }}>
                M
              </Avatar>
              <Box>
                <Typography variant="h5" fontWeight={800}>
                  Marwan Abdelwahab
                </Typography>
                <Typography color="text.secondary">Frontend Student</Typography>
              </Box>
              <Stack direction="row" spacing={1} justifyContent="center">
                <Chip label="React" color="primary" size="small" />
                <Chip label="MUI" variant="outlined" size="small" />
              </Stack>
              <Divider flexItem />
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Current confidence
                </Typography>
                <Rating value={4} readOnly />
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              border: 1,
              borderColor: "divider",
              boxShadow: (theme) =>
                theme.palette.mode === "light" ? "0 12px 30px rgba(15, 23, 42, 0.06)" : "none",
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={800}>
                Learning Progress
              </Typography>
              <List disablePadding>
                {profileCourses.map((course) => (
                  <ListItem
                    key={course.title}
                    disableGutters
                    sx={{ alignItems: "flex-start", py: 1.5 }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "action.hover", color: "primary.main" }}>
                        {course.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={course.title}
                      secondary={
                        <Stack spacing={0.75} sx={{ mt: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={course.progress}
                            sx={{ height: 8, borderRadius: 2 }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {course.progress}% completed
                          </Typography>
                        </Stack>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}
