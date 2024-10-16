import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import profilePic from "../../public/assets/profile-pic.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: { xs: "column", md: "row" }, 
        gap: 3, 
        backgroundColor: "black", 
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <Box
        sx={{
          position: "relative", // Important for circular styling
          width: 300, // Set width of the image container
          height: 300, // Set height of the image container
          borderRadius: "50%", // Make the image circular
          overflow: "hidden", // Ensure the image stays within circular boundaries
          marginTop: { xs: 3, md: 0 }, // Add space on small screens
        }}
      >
        <Image
          src={profilePic}
          alt="Picture of the author"
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Ensures the image covers the circular area
          placeholder="blur" // Optional blur-up while loading
        />
      </Box>

      <Box
        sx={{
          textAlign: { xs: "center", md: "left" }, // Center text on small screens
          color: "white", // White text color for better contrast
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 2,
            color: "#ffbb33", // Greenish-aqua color
            transition: "color 0.3s ease, transform 0.3s ease", // Smooth animation for color and size
            "&:hover": {
              color: "#00e0b8", // Slightly different aqua shade on hover
              transform: "scale(1.05)", // Slight zoom-in effect on hover
            },
            cursor: "pointer", // Change cursor to pointer on hover
          }}
        >
          Hello, I'm Shlok
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>

        {/* Add the Button Here */}
        <Button
  sx={{
    color: "#fff",
    backgroundColor: "transparent",
    border: "0 solid",
    boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0)",
    outline: "1px solid rgba(255, 255, 255, 0.5)",
    outlineOffset: "0px",
    textShadow: "none",
    transition: "all 1250ms cubic-bezier(0.19, 1, 0.22, 1)",
    padding: "10px 20px", // Padding for a better look
    fontSize: "16px", // Adjust font size
    borderRadius: "8px", // Rounded corners
    cursor: "pointer", // Pointer cursor on hover
    "&:hover": {
      border: "1px solid",
      boxShadow: `
        inset 0 0 20px rgba(255, 255, 255, 0.5), 
        0 0 20px rgba(255, 255, 255, 0.2)
      `,
      outlineColor: "rgba(255, 255, 255, 0)",
      outlineOffset: "15px",
      textShadow: "1px 1px 2px #427388", // Light shadow on text
      transition: "all 250ms ease-in-out",
      transform: "translateY(-3px)", // Move text slightly upwards on hover
    },
  }}
>
  Schedule a Call
</Button>

      </Box>
    </Box>
  );
};

export default HeroSection;
