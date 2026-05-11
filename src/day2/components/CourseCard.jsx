import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function CourseCard({ course }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const Icon = course.icon;
  const menuOpen = Boolean(anchorEl);

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: 1,
        borderColor: "divider",
        overflow: "hidden",
        boxShadow: (theme) =>
          theme.palette.mode === "light" ? "0 12px 28px rgba(15, 23, 42, 0.06)" : "none",
        transition: "transform 160ms ease, box-shadow 160ms ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: (theme) =>
            theme.palette.mode === "light" ? "0 18px 34px rgba(15, 23, 42, 0.1)" : "none",
        },
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 90,
          bgcolor: course.color,
          color: "common.white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon sx={{ fontSize: 42 }} />
      </CardMedia>

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Avatar sx={{ bgcolor: course.color }}>
              <Icon />
            </Avatar>
            <Stack direction="row" spacing={0.5}>
              <IconButton aria-label="favorite course">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} aria-label="course menu">
                <MoreVertIcon />
              </IconButton>
            </Stack>
          </Stack>

          <BoxTitle course={course} />

          <Stack direction="row" spacing={1}>
            <Chip label={course.track} size="small" color="primary" />
            <Chip label={course.level} size="small" variant="outlined" />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Rating value={course.rating} precision={0.5} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              {course.rating}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>

      <Divider />

      <CardActions sx={{ px: 2, py: 1.5 }}>
        <Button variant="contained" startIcon={<PersonAddIcon />} size="small">
          Register
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ ml: "auto" }}>
          {course.seats} seats
        </Typography>
        <IconButton
          size="small"
          onClick={() => setExpanded((current) => !current)}
          aria-label="show course details"
          sx={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 160ms ease",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0 }}>
          <Typography variant="body2" color="text.secondary">
            Includes hands-on tasks, examples from the ITI sessions, and a small final practice.
          </Typography>
        </CardContent>
      </Collapse>

      <Menu anchorEl={anchorEl} open={menuOpen} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>View details</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Add to favorites</MenuItem>
      </Menu>
    </Card>
  );
}

function BoxTitle({ course }) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h6">{course.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        Instructor: {course.instructor}
      </Typography>
    </Stack>
  );
}
