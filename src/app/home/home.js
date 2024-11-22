"use client";
import Image from "next/image";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { COLORS, useResponsive } from "@/themes/themes";
import ButtonComp from "@/components/button/button";

const HomePage = () => {
  const { isDesktop, isTablet } = useResponsive();
  const router = useRouter();

  const handleNextClick = () => {
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
          A passionate and skilled Frontend Developer with 2.9 years of
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
          <strong>Contact:</strong> 9259457900 <br />
          <strong>Address:</strong> New Shiv Puri, Hapur, 245101
        </Typography>
        <ButtonComp onClick={handleNextClick} />
      </Box>
      <Box>
        <Image
          src="/assets/home.png"
          alt="Profile Image"
          width={isDesktop ? 600 : isTablet ? 500 : 300}
          height={isDesktop ? 600 : isTablet ? 500 : 300}
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
