import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StorageIcon from "@mui/icons-material/Storage";

export const stats = [
  { title: "Courses", value: 6, chip: "ITI Tracks", progress: 80 },
  { title: "Students", value: 128, chip: "Registered", progress: 65 },
  { title: "Average Rating", value: "4.6", chip: "Good feedback", progress: 92 },
];

export const students = [
  { name: "Ahmed" },
  { name: "Sara" },
  { name: "Mona" },
  { name: "Youssef" },
];

export const sessions = [
  { topic: "Material UI basics", day: "Monday", time: "7 PM", status: "Live" },
  { topic: "React forms practice", day: "Tuesday", time: "6 PM", status: "Practice" },
  { topic: "Final project discussion", day: "Thursday", time: "8 PM", status: "Review" },
];

export const courses = [
  {
    id: 1,
    title: "React Basics",
    level: "Beginner",
    track: "Frontend",
    instructor: "Eng. Nour",
    rating: 4.5,
    seats: 24,
    color: "#1976d2",
    icon: CodeIcon,
  },
  {
    id: 2,
    title: "Material UI",
    level: "Beginner",
    track: "Frontend",
    instructor: "Eng. Omar",
    rating: 4.7,
    seats: 18,
    color: "#2e7d32",
    icon: DesignServicesIcon,
  },
  {
    id: 3,
    title: "Node.js Intro",
    level: "Intermediate",
    track: "Backend",
    instructor: "Eng. Ali",
    rating: 4.2,
    seats: 16,
    color: "#6d4c41",
    icon: StorageIcon,
  },
  {
    id: 4,
    title: "UI Design Basics",
    level: "Beginner",
    track: "UI/UX",
    instructor: "Eng. Mariam",
    rating: 4.8,
    seats: 20,
    color: "#9c27b0",
    icon: DesignServicesIcon,
  },
  {
    id: 5,
    title: "Advanced React",
    level: "Advanced",
    track: "Frontend",
    instructor: "Eng. Hany",
    rating: 4.6,
    seats: 12,
    color: "#0288d1",
    icon: CodeIcon,
  },
  {
    id: 6,
    title: "Database Fundamentals",
    level: "Intermediate",
    track: "Backend",
    instructor: "Eng. Salma",
    rating: 4.3,
    seats: 22,
    color: "#455a64",
    icon: StorageIcon,
  },
];

export const projectImages = [
  {
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    title: "React dashboard",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    title: "Code workspace",
  },
  {
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    title: "Mobile UI",
  },
  {
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop",
    title: "Interface board",
  },
];
