"use client"; // For animations and state management on client side

import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";

const AboutSection = () => {
  const [clickedText, setClickedText] = useState(null);

  const handleTextClick = (text) => {
    setClickedText(text);
    setTimeout(() => setClickedText(null), 300); // Reset animation
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 5,
        width: "90%",
        margin: "0 auto",
        padding: { xs: "3rem 2rem", md: "5rem 3rem" },
        backgroundColor: "#ffffff", // Yellowish background
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section */}
      <Box sx={{ width: { xs: "100%", md: "50%" }, animation: "fadeInLeft 1s ease" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          onClick={() => handleTextClick("About Me")}
          sx={{
            fontWeight: "bold",
            color: clickedText === "About Me" ? "#F57F17" : "#333",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            transform: clickedText === "About Me" ? "scale(1.1)" : "scale(1)",
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          onClick={() => handleTextClick("Business Owner")}
          sx={{
            color: clickedText === "Business Owner" ? "#F57F17" : "#555",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            transform: clickedText === "Business Owner" ? "scale(1.1)" : "scale(1)",
          }}
        >
          A Passionate Business Owner
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          onClick={() => handleTextClick("Innovation")}
          sx={{
            color: clickedText === "Innovation" ? "#F57F17" : "#555",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            transform: clickedText === "Innovation" ? "scale(1.1)" : "scale(1)",
          }}
        >
          Driven by Creativity and Innovation
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          onClick={() => handleTextClick("Honey Products")}
          sx={{
            color: clickedText === "Honey Products" ? "#F57F17" : "#555",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            transform: clickedText === "Honey Products" ? "scale(1.1)" : "scale(1)",
          }}
        >
          Crafting Quality Honey Products
        </Typography>

        <Box
          sx={{
            border: "2px solid black",
            padding: 2,
            marginTop: 2,
            width: "max-content",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontWeight: "bold",
              borderColor: "#333",
              color: "#333",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#333", color: "#fff" },
            }}
          >
            More About Me
          </Button>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 2 }}>
            <FaFacebookSquare size={32} color="#4267B2" />
            <FaTwitter size={32} color="#1DA1F2" />
            <FaInstagram size={32} color="#E1306C" />
            <SlSocialDribbble size={32} color="#EA4C89" />
          </Box>
        </Box>
      </Box>

      {/* Right Section */}
      <Box sx={{ width: { xs: "100%", md: "50%" }, animation: "fadeInRight 1s ease" }}>
        <Typography
          variant="body1"
          gutterBottom
          onClick={() => handleTextClick("Passion")}
          sx={{
            color: clickedText === "Passion" ? "#F57F17" : "#666",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            transform: clickedText === "Passion" ? "scale(1.1)" : "scale(1)",
          }}
        >
          I am a businessman with a passion for providing honest and user-friendly honey products.
        </Typography>
        <Typography
          variant="body1"
          onClick={() => handleTextClick("Connect")}
          sx={{
            color: clickedText === "Connect" ? "#F57F17" : "#666",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            transform: clickedText === "Connect" ? "scale(1.1)" : "scale(1)",
          }}
        >
          Let's connect and create something great together!
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
