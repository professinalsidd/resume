"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { COLORS, useResponsive } from "@/themes/themes";
import LayoutComp from "@/components/layout/layout";
import { DATA } from "@/db/db";
import ButtonComp from "@/components/button/button";

const ExperiencePage = () => {
  const { isDesktop, isTablet } = useResponsive();

  return (
    <LayoutComp>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          height: { xs: "none", md: "80vh" },
          p: 5,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, flexDirection: "column", gap: 3, display: "flex" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontSize: { xs: 20, md: 50 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Experience
          </Typography>

          {/* Scrollable Container */}
          <Box
            sx={{
              height: { xs: "60vh", md: "50vh" },
              overflow: "auto",
              p: 2,
              // background: "#333",
              borderRadius: 2,
              scrollbarWidth: "none",
            }}
          >
            {DATA.experience.map((item, index) => (
              <Box
                key={index}
                sx={{
                  // background: "#444",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    width: "100%",
                    fontSize: { xs: 16, md: 20 },
                  }}
                >
                  <strong>{item.role}</strong>
                  <br />
                  <em>{item.company}</em>
                  <br />
                  <strong>{item.duration}</strong>
                  <ul style={{ marginLeft: "1rem" }}>
                    {item.details.map((detail, i) => (
                      <li key={i} style={{ marginBottom: 5 }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Typography>
              </Box>
            ))}
          </Box>
          {/* Button */}
          <ButtonComp />
        </Box>

        {/* Right Section */}
        <Box>
          <Image
            src="/assets/experience.png"
            alt="Profile Image"
            width={isDesktop ? 600 : isTablet ? 500 : 300}
            height={isDesktop ? 600 : isTablet ? 500 : 300}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </LayoutComp>
  );
};

export default ExperiencePage;
