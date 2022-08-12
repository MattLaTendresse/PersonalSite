import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const AboutMe = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Avatar sx={{ width: 150, height: 150, m: 1 }} src="picture.jpeg" />
        <h1>hello</h1>
      </Box>
    </>
  );
};
export default AboutMe;
