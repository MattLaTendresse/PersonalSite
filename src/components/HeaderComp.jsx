import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

const HeaderComp = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: grey[900] }}>
        <Typography
          variant="h4"
          noWrap
          sx={{
            display: { display: "flex", justifyContent: "center" },
            fontFamily: "monospace",
            fontWeight: 800,
            letterSpacing: ".05rem",
            width: "auto",
          }}
        >
          Matt LaTendresse
        </Typography>
      </AppBar>
    </>
  );
};

export default HeaderComp;
