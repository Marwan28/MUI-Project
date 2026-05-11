import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: "10px 24px",
  textTransform: "none",
  fontWeight: 700,
  boxShadow: theme.palette.mode === "light" ? "0 10px 20px rgba(37, 99, 235, 0.2)" : "none",
  "&:hover": {
    boxShadow: theme.palette.mode === "light" ? "0 12px 24px rgba(37, 99, 235, 0.28)" : "none",
    backgroundColor: theme.palette.primary.dark,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
    boxShadow: "none",
  },
}));

export default CustomButton;
