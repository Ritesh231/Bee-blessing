"use client";
import { Box, Button, Typography } from "@mui/material";
import { keyframes } from "@emotion/react"; // for animation

// Define keyframes for border animation
const borderAnimation = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 1); }
  100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
`;

export default function AnimatedBox() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh", // Height for centering vertically
        backgroundColor: "#121212",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%", // 90% width on extra small screens
            sm: "80%", // 80% width on small screens and up
            md: "70%", // 70% width on medium screens and up
            lg: "60%", // 60% width on large screens and up
          },
          maxWidth: "700px", // Ensure it doesn’t grow too large
          padding: "2rem", // Internal padding
          backgroundColor: "#000000",
          border: "2px solid aqua",
          animation: `${borderAnimation} 2s infinite ease-in-out`,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Align content left and right
          gap: 2, // Add space between text and button
          textAlign: "center", // Center text for smaller screens
        }}
      >
        <Typography
          style={{ color: "#ffffff" }}
          variant="h4"
          component="h2"
          gutterBottom
        >
          Get started with a consultation today.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffd11a",
            color: "black",
            borderRadius: "25px",
            "&:hover": {
              backgroundColor: "#00FFFF",
              transform: "scale(1.1)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          Let’s Work Together
        </Button>
      </Box>
    </div>
  );
}
