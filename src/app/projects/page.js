"use client";

import ButtonComp from "@/components/button/button";
import LayoutComp from "@/components/layout/layout";
import { DATA } from "@/db/db";
import { useResponsive } from "@/themes/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectsPage = () => {
  const { isDesktop, isTablet } = useResponsive();
  const router = useRouter();

  const handleClick = () => {
    router.push("/skills");
  };
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
            Projects
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
            {DATA.projects.map((item, index) => (
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
                  <strong>{item.label}</strong>
                  <ul style={{ marginLeft: "1rem" }}>
                    {item.details.map((detail, i) => (
                      <li key={i} style={{ marginBottom: 5 }}>
                        {detail.name}
                      </li>
                    ))}
                  </ul>
                </Typography>
              </Box>
            ))}
          </Box>
          {/* Button */}
          {isDesktop && <ButtonComp onClick={handleClick} />}
        </Box>

        {/* Right Section */}
        <Box>
          <Image
            src="/assets/project.png"
            alt="Profile Image"
            width={isDesktop ? 600 : isTablet ? 500 : 300}
            height={isDesktop ? 600 : isTablet ? 500 : 300}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
        {!isDesktop && <ButtonComp onClick={handleClick} />}
      </Box>
    </LayoutComp>
  );
};

export default ProjectsPage;
