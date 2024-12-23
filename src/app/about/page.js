"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useResponsive } from "@/themes/themes";
import LayoutComp from "@/components/layout/layout";
import ButtonComp from "@/components/button/button";

const AboutPage = () => {
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

  const handleNextClick = () => {
    trackButtonClick();
    router.push("/experience");
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
        <Box sx={{ flex: 1, flexDirection: "column", gap: 3, display: "flex" }}>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontSize: { xs: 20, md: 50 } }}
          >
            About | Me
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              width: { xs: "100%", md: 500 },
              fontSize: { xs: 16, md: 20 },
            }}
          >
            I am a dedicated and innovative Frontend Developer with nearly three
            years of hands-on experience in crafting intuitive and responsive
            web and mobile applications. With a strong foundation in React.js
            and React Native, I specialize in creating seamless user experiences
            and dynamic interfaces. My expertise extends to state management
            with Redux Toolkit, robust code development using TypeScript, and
            designing visually appealing UIs with tools like Material UI and
            Figma.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              width: { xs: "100%", md: 500 },
              fontSize: { xs: 16, md: 20 },
            }}
          >
            Education Bachelor of Computer Applications (BCA)2017–2020
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", fontSize: { xs: 16, md: 20 } }}
          >
            Languages English | Hindi | Punjabi
          </Typography>
          {isDesktop && <ButtonComp onClick={handleNextClick} />}
        </Box>
        <Box>
          <Image
            src="/assets/about.png"
            alt="about Image"
            width={isDesktop ? 600 : isTablet ? 500 : 300}
            height={isDesktop ? 600 : isTablet ? 500 : 300}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
        {isMobile && <ButtonComp onClick={handleNextClick} />}
        {isTablet && <ButtonComp onClick={handleNextClick} />}
      </Box>
    </LayoutComp>
  );
};

export default AboutPage;
