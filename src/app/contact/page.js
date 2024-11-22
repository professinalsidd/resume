"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import LayoutComp from "@/components/layout/layout";
import { useResponsive } from "@/themes/themes";
import Image from "next/image";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { input } from "./style";

const ContactPage = () => {
  const { isDesktop, isTablet } = useResponsive();
  const formRef = useRef();

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_nz1dnbb",
          "template_w0z3u62",
          formRef.current,
          "JOMphylOCa_UQxkWz"
        )
        .then(
          (result) => {
            toast.success("Email sent successfully!");
            setFormData({ fullName: "", email: "", phone: "", message: "" });
          },
          (error) => {
            console.log("Failed to send email:", error);
            toast.error("Failed to send email. Please try again later.");
          }
        );
    }
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
        <Box
          sx={{
            flex: 1,
            flexDirection: "column",
            gap: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontSize: { xs: 20, md: 50 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Contact Us
          </Typography>
          <Box
            component="form"
            ref={formRef}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", md: "60%" },
              backgroundColor: "#333",
              padding: 3,
              borderRadius: 2,
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Full Name"
              variant="outlined"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              sx={input}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              sx={input}
              required
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              sx={input}
            />
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              multiline
              rows={4}
              sx={input}
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#CD6464",
                "&:hover": { backgroundColor: "#A55C5C" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box>
          <Image
            src="/assets/contact.png"
            alt="Contact Image"
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

export default ContactPage;
