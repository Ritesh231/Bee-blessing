"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import profilePic from "../../public/assets/profile-pic.jpg";
import "./testimonialAboutCarousel.css";
import "./testimonialCarousel.css";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const TestimonialAboutCarouselCard = () => {
  return (
    <Card
      sx={{
        width: "80%",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#0d0d0d",
        backgroundImage:
          "linear-gradient(145deg, #141414 0%, #242424 100%)",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
        borderRadius: "15px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Image
            src={profilePic}
            alt="Testimonial Author Picture"
            width={150}
            height={150}
            style={{
              borderRadius: "50%",
              border: "5px solid #e91e63",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            color: "white",
            textAlign: { xs: "center", sm: "left" },
            padding: "20px",
            maxWidth: "500px",
          }}
        >
          <Typography variant="h3" component="div" sx={{ marginBottom: "10px" }}>
            Shlok
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#e0e0e0", marginBottom: "8px" }}
          >
            Honey Business Owner
          </Typography>
          <Typography variant="body1" sx={{ color: "#b0b0b0", marginBottom: 2 }}>
            Passionate about creating interactive user experiences that are both
            functional and visually appealing.
          </Typography>
          <CardActions>
            <Button
              size="large"
              sx={{
                color: "#e91e63",
                border: "2px solid #e91e63",
                "&:hover": { backgroundColor: "#e91e63", color: "white" },
              }}
            >
              Hire Me
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

const TestimonialAboutCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <Box sx={{ backgroundColor: "#ffffff", padding: "50px 0" }}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container" style={{ display: "flex" }}>
          <div className="embla__slide">
            <TestimonialAboutCarouselCard />
          </div>
          <div className="embla__slide">
            <TestimonialAboutCarouselCard />
          </div>
          <div className="embla__slide">
            <TestimonialAboutCarouselCard />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default TestimonialAboutCarousel;
