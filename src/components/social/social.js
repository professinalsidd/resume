"use client";
import { socialLinks } from "@/db/db";
import { Box, IconButton } from "@mui/material";
import React from "react";

const SocialComp = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      {socialLinks.map((social, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(social.url, "_blank")}
          sx={{
            color: "#fff",
            backgroundColor: social.color,
            "&:hover": {
              transform: "scale(1.2)",
              boxShadow: `0 4px 15px ${social.color}`,
              cursor: "pointer",
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          {social.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialComp;
