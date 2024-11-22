"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useResponsive } from "@/themes/themes";
import ButtonComp from "@/components/button/button";
import SocialComp from "@/components/social/social";

const HomePage = () => {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const router = useRouter();

  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date("2021-09-06");
      const currentDate = new Date();
      const diffInMs = currentDate - startDate;
      const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
      setExperience(diffInYears.toFixed(1));
    };

    calculateExperience();

    const interval = setInterval(calculateExperience, 86400000);
    return () => clearInterval(interval);
  }, []);

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
    router.push("/about");
  };

  return (
    <Box
      sx={{
        position: "relative",
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        height: { xs: "none", md: "80vh" },
        p: 5,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Main Content */}
      <Box sx={{ flex: 1, flexDirection: "column", gap: 3, display: "flex" }}>
        <Typography
          variant="h4"
          sx={{ color: "#fff", fontSize: { xs: 20, md: 50 } }}
        >
          Software Developer | Frontend Specialist
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#fff",
            width: { xs: "100%", md: 500 },
            fontSize: { xs: 16, md: 20 },
          }}
        >
          A passionate and skilled Frontend Developer with {experience} years of
          experience in building responsive and interactive web and mobile
          applications. Proficient in React.js, React Native, Material UI,
          TypeScript, and more. Seeking to contribute to innovative projects in
          a dynamic, growth-oriented environment.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#fff", fontSize: { xs: 16, md: 20 } }}
        >
          <strong>Email:</strong> professionalsiddmail@gmail.com <br />
          <strong>Contact:</strong> +91 9259457900 <br />
          <strong>Address:</strong> Punjabi colony, Hapur, 245101
        </Typography>
        {isDesktop && <ButtonComp onClick={handleNextClick} />}
        {isDesktop && <SocialComp />}
      </Box>
      <Box>
        <Image
          src="/assets/home.png"
          alt="home Image"
          width={isDesktop ? 600 : isTablet ? 500 : 300}
          height={isDesktop ? 600 : isTablet ? 500 : 300}
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      {isMobile || (isTablet && <ButtonComp onClick={handleNextClick} />)}
      {isMobile || (isTablet && <SocialComp />)}
    </Box>
  );
};

export default HomePage;
