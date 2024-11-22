import { COLORS } from "@/themes/themes";
import { Box, Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ButtonComp = ({ onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      <Button
        onClick={onClick}
        sx={{
          background: "transparent",
          border: "0.5px solid #CD6464",
          color: COLORS.WHITE,
          padding: "5px 30px",
          "&:hover": {
            background: "#CD6464",
            color: COLORS.WHITE,
          },
        }}
      >
        <ArrowRightAltIcon
          sx={{
            color: COLORS.BLACK,
            "&:hover": {
              color: COLORS.WHITE,
            },
          }}
        />
      </Button>
    </Box>
  );
};

export default ButtonComp;
