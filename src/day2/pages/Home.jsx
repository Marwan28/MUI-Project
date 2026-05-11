import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import StatCard from "../components/StatCard";
import { projectImages, sessions, stats, students } from "../data";

export default function Home() {
  return (
    <Stack spacing={3}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          border: 1,
          borderColor: "divider",
          bgcolor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h4" fontWeight={800}>
              ITI Courses Overview
            </Typography>
            <Typography sx={{ opacity: 0.86 }}>
              Simple summary for course registration and Material UI practice.
            </Typography>
          </Box>
        </Stack>
      </Paper>

      <Grid container spacing={2}>
        {stats.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <StatCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper elevation={0} sx={{ p: 2, border: 1, borderColor: "divider" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography variant="h6">Upcoming Sessions</Typography>
              <Chip label="This week" color="primary" size="small" />
            </Stack>
            <Divider sx={{ mb: 1 }} />
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Topic</TableCell>
                    <TableCell>Day</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sessions.map((session) => (
                    <TableRow key={session.topic}>
                      <TableCell>{session.topic}</TableCell>
                      <TableCell>{session.day}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>
                        <Chip
                          label={session.status}
                          size="small"
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Paper elevation={0} sx={{ p: 2, border: 1, borderColor: "divider" }}>
            <Stack spacing={2}>
              <Typography variant="h6">New Students</Typography>
              <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
                {students.map((student) => (
                  <Avatar key={student.name}>{student.name[0]}</Avatar>
                ))}
              </AvatarGroup>
              <Typography variant="body2" color="text.secondary">
                Students are joining the new ITI learning groups.
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={0} sx={{ p: 2, border: 1, borderColor: "divider" }}>
        <Stack spacing={2}>
          <Typography variant="h6">Student Projects Gallery</Typography>
          <ImageList
            gap={12}
            rowHeight={170}
            sx={{
              m: 0,
              overflow: "visible",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr) !important",
                sm: "repeat(2, 1fr) !important",
                md: "repeat(4, 1fr) !important",
              },
            }}
          >
            {projectImages.map((item) => (
              <ImageListItem
                key={item.title}
                sx={{
                  borderRadius: 1,
                  overflow: "hidden",
                  border: 1,
                  borderColor: "divider",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <ImageListItemBar title={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Stack>
      </Paper>
    </Stack>
  );
}
