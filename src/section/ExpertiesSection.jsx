import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { CenterFocusStrong } from "@mui/icons-material";

const CustomIcon = ({ children }) => (
  <div>
    <svg width="50" height="50"> {/* Adjust size if needed */}
      {children}
    </svg>
  </div>
);

const ExpertiseSection = () => {
  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#ffe066',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <h1 style={{fontSize:"50px"}}>Expertise</h1>
      {/* Grid container for the expertise cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Card 1 */}
        <div style={{ textAlign: "center" }}>
        <SvgIcon component="svg" fontSize="large" viewBox="0 0 64 64">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#2196F3">
      <path d="M2 8h60v48H2z" />
      <path d="M10 16h44v32H10z" fill="#FFF" />
      <path d="M16 24h8v8h-8zM40 24h8v8h-8z" fill="#000" />
    </svg>
  </SvgIcon>
          <h3>Web Development</h3>
          <p>
            Make any layout responsive. Remix fixed layouts to fluid by changing
            the column and gutter widths and removing a few columns as needed.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{ textAlign: "center" }}>
        <SvgIcon fontSize="large">
  {/* Example SVG path for a content/marketing icon */}
  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 8h14v-2H7v2zm0-4h14v-2H7v2zm0-6v2h14V7H7zm11 2h2V3h-2v6zM9 3v2h2V3H9zm4 0v6h2V3h-2zm-4 8h6v-2H9v2z" />
</SvgIcon>
<h3>Content Marketing</h3>
          <p>
            The markup you write gets semantic classes. Unless you want to use
            them, in which case they are included.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{ textAlign: "center" }}>
        <SvgIcon component="svg" fontSize="large" viewBox="0 0 64 64">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#4CAF50">
      <path d="M32 2a30 30 0 1030 30A30.034 30.034 0 0032 2zm0 58A28 28 0 114.021 34H32v26z" />
      <path d="M32 4v26h26A28.03 28.03 0 0032 4z" />
      <path d="M29 29h6v6h-6z" />
    </svg>
  </SvgIcon>
          <h3>Digital Marketing</h3>
          <p>
            Precise fractions are possible. Variable grid systems. Fluid layouts
            will look exactly the same in every browser.
          </p>
        </div>
      </div>

      {/* Example Section */}
      
    </div>
  );
};

export default ExpertiseSection;
