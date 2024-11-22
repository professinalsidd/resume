import { COLORS } from "@/themes/themes";

export const input = {
  backgroundColor: "#fff",
  borderRadius: 1,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "blue",
    },
    "&:hover fieldset": {
      borderColor: "green",
    },
    "&.Mui-focused fieldset": {
      borderColor: COLORS.Charcoal,
    },
  },
  "& .MuiInputLabel-root": {
    color: "gray",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: COLORS.WHITE,
    background: COLORS.MediumBlue,
  },
};
