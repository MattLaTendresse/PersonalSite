import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const AboutMe = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Avatar
          sx={{ width: 150, height: 150, m: 1 }}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEJFbzpAVmVYA/profile-displayphoto-shrink_800_800/0/1633016328184?e=1659571200&v=beta&t=MyhaPnznIjiPSkkYhzzILs-GOOEV9TNE_oLmbLgYv8E"
        />
        <h1>hello</h1>
      </Box>
    </>
  );
};
export default AboutMe;
