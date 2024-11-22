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
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "linear-gradient(90deg, #ff7eb3, #ff758c, #fd5c63)",
          border: "none",
          color: COLORS.WHITE,
          padding: "10px 40px",
          fontSize: "16px",
          textTransform: "uppercase",
          fontWeight: "bold",
          borderRadius: "50px",
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            background: "linear-gradient(90deg, #fd5c63, #ff758c, #ff7eb3)",
            transform: "scale(1.05)",
            boxShadow: "0 4px 15px rgba(255, 94, 98, 0.5)",
          },
        }}
      >
        Click Me
        <ArrowRightAltIcon
          sx={{
            fontSize: "24px",
            transition: "transform 0.3s ease-in-out, color 0.3s",
            "&:hover": {
              transform: "translateX(5px)",
              color: "#ffffff",
            },
          }}
        />
      </Button>
    </Box>
  );
};

export default ButtonComp;
