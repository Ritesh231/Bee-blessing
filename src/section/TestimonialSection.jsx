import { Box, Typography } from "@mui/material";
import TestimonialCarousel from "../components/TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: { xs: "20px", md: "40px" }, // Responsive padding for mobile and desktop
        backgroundColor: "#000000", // Change background to black
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#ffffff" }}>
        Clients
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: "#ffffff" }}>
        I have had the privilege of working with these incredible brands.
      </Typography>

      {/* Carousel Component */}
      <Box sx={{ marginTop: 4 }}>
        <TestimonialCarousel />
      </Box>
    </Box>
  );
};

export default TestimonialSection;
