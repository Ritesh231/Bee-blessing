import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../../../../public/assets/profile-pic.jpg";
import TestimonialAboutCarousel from "../../../components/portfolio/TestimonialAboutCarousel";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "black",
          height: { xs: "auto", md: "90vh" }, // Responsive height
          paddingTop: { xs: "7vh" },
          paddingBottom: { xs: "7vh" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small devices
          alignItems: "center",
        }}
      >
        {/* Main Content Container */}
        <Box
          sx={{
            width: { xs: "90%", md: "900px" }, // Full width on small devices
            boxShadow: "0 0 20px 10px rgba(255, 20, 147, 0.5)",
            borderRadius: "20px",
            zIndex: 0,
            display: "flex",
            height: "80%",
            margin: { xs: "20px", md: "0 auto" }, // Margin adjustment
            padding: { xs: "10px", md: "30px" }, // Padding adjustment
            flexDirection: { xs: "column", md: "row" }, // Stack on small devices
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Left Text Section */}
          <Box
            sx={{
              flex: 1,
              color: "white",
              padding: { xs: "20px", md: "10% 10% 10% 20%" }, // Responsive padding
              textAlign: { xs: "center", md: "left" }, // Center text on small devices
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: "bold", marginBottom: 2, fontSize: { md: '3.5rem' } }}>
              I’m Shlok
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 400, marginBottom: 3, fontSize: { md: '1.5rem' } }}>
              Business Owner
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 3, maxWidth: "600px", margin: "0 auto", fontSize: { md: '1.0rem' } }}>
              Mauris rutrum, velit consequat consequat finibus metus nisi condimentum erat.
            </Typography>
            <Button
              variant="contained"
              href="/"
              sx={{
                backgroundColor: "#ff3366",
                color: "white",
                fontWeight: "bold",
                fontSize: { md: "15x" },
                height: { xs: "5vh" },
                margin: { xs: "0 auto", md: "10%" }, // Center button on small devices
                '&:hover': {    // Optional: adding hover effect
                  backgroundColor: "#e61e50",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease"
                }
              }}

            >
              Portfolio
            </Button>
          </Box>

          {/* Right Image Section */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              height: { xs: "300px", md: "100%" }, // Responsive height
              padding: { xs: "0", md: "20px" }, // Padding adjustment
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Profile Image */}
            <Box
              sx={{
                position: "absolute",
                bottom: "50%",
                right: { xs: "10%", md: "10%" },
                transform: "translateY(50%)",
                zIndex: 1,
                width: "300px",
                height: "300px",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                display: "flex",
                alignItems: "center",
                display: { xs: 'none', md: 'flex' },
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: "0 0 20px 10px rgba(255, 20, 147, 0.5)",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  width: "500px",
                  height: "500px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  width={500}
                  height={500}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* About Me Section */}
      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          padding: { xs: 2, sm: 5 }, // Responsive padding
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "#ff3366", fontWeight: "bold", marginBottom: 2 }}
        >
          About Me
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          {/* Profile Picture Container */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "250px", md: "300px" },
              height: { xs: "250px", md: "300px" },
              overflow: "hidden",
              marginBottom: { xs: 2, md: 0 }, // Bottom margin for small screens
            }}
          >
            <Image
              src={profilePic}
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              textAlign: "left",
              paddingLeft: { xs: "0", md: "5%" },
              paddingBottom: "15%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            tempora incidunt magnam ab repellendus officiis.
            <Box sx={{ marginTop: 2, display: "flex", justifyContent: { xs: "center", sm: "left" }, gap: 2 }}>
              <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" sx={{ color: '#0A66C2' }}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter" sx={{ color: '#1DA1F2' }}>
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton href="https://github.com" target="_blank" aria-label="GitHub" sx={{ color: '#333' }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
          </Typography>
        </Box>


      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: { xs: "20px", sm: "40px" },
          backgroundColor: "#f7f7f7",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.5rem" },
            fontWeight: "bold",
            color: "#3a004b",
            marginBottom: "10px",
          }}
        >
          Testimonials
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            marginBottom: "20px",
          }}
        >
          Reviews from Real Clients
        </Typography>
        <TestimonialAboutCarousel />
      </Box>
    </Box>
  );
};

export default About;
