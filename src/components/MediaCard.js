import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";

const MediaCard = () => {
  const handleGameClick = () => {
    window.location.href = "https://github.com/EECS-448-Group-5/Project-3";
  };
  const handleSortClick = () => {
    window.location.href =
      "https://github.com/MattLaTendresse/SortingVis.github.io";
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "monospace",
          fontWeight: 800,
          letterSpacing: ".5rem",
          textAlign: "center",
          m: 3,
        }}
      >
        👇Scroll down to👇
      </Typography>
      <Box
        sx={{
          "&.MuiBox-root": { display: "flex", flexDirection: "column" },
        }}
      >
        <CardMedia
          sx={{
            width: "auto",
            height: "auto",
            m: "auto",
            mt: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 800,
              color: "black",
              textAlign: "center",
            }}
          >
            learn a little about me!
          </Typography>
          <Avatar
            sx={{ width: "40%", height: "50%", m: "auto", mb: 1 }}
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEJFbzpAVmVYA/profile-displayphoto-shrink_800_800/0/1633016328184?e=1659571200&v=beta&t=MyhaPnznIjiPSkkYhzzILs-GOOEV9TNE_oLmbLgYv8E"
          />
        </CardMedia>

        <CardMedia
          sx={{
            width: "auto",
            height: "auto",
            m: "auto",
            mt: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 800,
              m: 1,
              color: "black",
              textAlign: "center",
            }}
          >
            👋 Introduction 👋
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 300,
              color: "black",
              textAlign: "center",
            }}
          >
            Hey, I'm Matt.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 300,
              color: "black",
              textAlign: "center",
            }}
          >
            I'm currently working at Garmin in Olathe, KS as a software engineer
            intern.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 300,
              color: "black",
              textAlign: "center",
            }}
          >
            I enjoy outdoor activities, listening to music, exploring, trying
            new foods, and hanging out with friends!
          </Typography>
        </CardMedia>
        <CardMedia
          sx={{
            width: "auto",
            height: "auto",
            m: "auto",
            mt: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 800,
              m: 1,
              color: "black",
              textAlign: "center",
            }}
          >
            📚 Education 📚
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 300,
              color: "black",
              textAlign: "center",
            }}
          >
            B.S. in Computer Science at the University of Kansas
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 300,
              color: "black",
              textAlign: "center",
            }}
          >
            Graduating December 2023
          </Typography>
        </CardMedia>
        <CardMedia
          sx={{
            width: "auto",
            height: "auto",
            m: "auto",
            mt: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 800,
              m: 1,
              color: "black",
              textAlign: "center",
            }}
          >
            👨🏽‍💻 Projects 👨🏽‍💻
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: 600,
              color: "black",
              textAlign: "center",
            }}
          >
            🎮 Adventure of Mareo 🎮
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 300,
              color: "black",
              textAlign: "center",
            }}
          >
            Top down 2D rougelike game, developed using Kaboom JS, a js library
            for developing games in the web browser. Collaborated using GIT with
            a group of 4 other developers.
            <Button onClick={handleGameClick} style={{ color: "black" }}>
              <GitHubIcon />
            </Button>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: 600,
              color: "black",
              textAlign: "center",
            }}
          >
            📊 Sorting Algorithm App 📊
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 300,
              color: "black",
              textAlign: "center",
            }}
          >
            Implemented the visualization of popular sorting algorithms on
            arrays using React. Developed react components for rendering and
            updating the state of the app.
            <Button onClick={handleSortClick} style={{ color: "black" }}>
              <GitHubIcon />
            </Button>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              fontWeight: 800,
              m: 1,
              color: "black",
              textAlign: "center",
              mt: 3,
            }}
          >
            💻 Technical Skills 💻
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: 600,
              color: "black",
              textAlign: "center",
            }}
          >
            Languages:{" "}
            <Typography
              variant="h7"
              sx={{
                fontFamily: "monospace",
                fontWeight: 300,
                color: "black",
                textAlign: "center",
              }}
            >
              C++, HTML, CSS, JavaScript
            </Typography>
          </Typography>
        </CardMedia>
      </Box>
    </>
  );
};

export default MediaCard;
