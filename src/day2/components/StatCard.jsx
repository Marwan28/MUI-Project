import { Box, Chip, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StatPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.25),
  height: "100%",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.palette.mode === "light" ? "0 12px 30px rgba(15, 23, 42, 0.06)" : "none",
  transition: "transform 160ms ease, box-shadow 160ms ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: theme.palette.mode === "light" ? "0 18px 34px rgba(15, 23, 42, 0.1)" : "none",
  },
}));

export default function StatCard({ title, value, chip, progress }) {
  return (
    <StatPaper elevation={0}>
      <Stack spacing={1.5}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography color="text.secondary">{title}</Typography>
          <Chip label={chip} size="small" color="primary" variant="outlined" />
        </Stack>
        <Typography variant="h4" fontWeight={800}>
          {value}
        </Typography>
        <Box>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 2 }} />
        </Box>
      </Stack>
    </StatPaper>
  );
}
