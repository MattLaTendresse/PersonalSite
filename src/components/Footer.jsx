import * as React from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const handleLinkedClick = () => {
    window.location.href = "https://linkedin.com/in/mattlatendresse";
  };
  const handleGitClick = () => {
    window.location.href = "https://github.com/MattLaTendresse";
  };
  const handleResumeClick = () => {
    window.location.href =
      "https://drive.google.com/file/d/1iVB9dTnZsL5SilGsqPhL1vWtsCFhGrjt/view?usp=sharing";
  };
  const handleMailClick = () => {
    window.location.href = "mailto:matthewlatendresse0803@gmail.com";
  };
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "monospace",
          fontWeight: 600,
          color: "black",
          textAlign: "center",
        }}
      >
        © 2022 Matt LaTendresse.
      </Typography>
      <Box
        sx={{
          width: "auto",
          height: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={handleLinkedClick} style={{ color: "black" }}>
          <LinkedInIcon fontSize="large" />
        </Button>
        <Button onClick={handleGitClick} style={{ color: "black" }}>
          <GitHubIcon fontSize="large" />
        </Button>
        <Button onClick={handleResumeClick} style={{ color: "black" }}>
          <PictureAsPdfIcon fontSize="large" />
        </Button>
        <Button onClick={handleMailClick} style={{ color: "black" }}>
          <EmailIcon fontSize="large" />
        </Button>
      </Box>
    </>
  );
};

export default Footer;
