"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useResponsive } from "@/themes/themes";
import LayoutComp from "@/components/layout/layout";
import { DATA } from "@/db/db";
import ButtonComp from "@/components/button/button";
import { useRouter } from "next/navigation";

const ExperiencePage = () => {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const router = useRouter();

  // Track page view when the component mounts
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: "Home Page",
        page_location: window.location.href,
        page_path: "/",
      });
    }
  }, []);

  const trackButtonClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "button_click", {
        event_category: "Navigation",
        event_label: "Next Button",
        value: 1,
      });
    }
  };

  const handleClick = () => {
    trackButtonClick();
    router.push("/projects");
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
          {isDesktop && <ButtonComp onClick={handleClick} />}
        </Box>

        {/* Right Section */}
        <Box>
          <Image
            src="/assets/experience.png"
            alt="experience Image"
            width={isDesktop ? 600 : isTablet ? 500 : 300}
            height={isDesktop ? 600 : isTablet ? 500 : 300}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
        {isMobile || (isTablet && <ButtonComp onClick={handleNextClick} />)}
      </Box>
    </LayoutComp>
  );
};

export default ExperiencePage;
