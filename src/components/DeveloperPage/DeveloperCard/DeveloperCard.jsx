import React from "react";
import { useState } from "react";
// mui components
import {
  Box,
  Link,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
// icons
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { makeStyles } from "@mui/styles";
// my components

const getStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: 16,
    borderBottom: theme.components.border.main,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 600,
    paddingRight: 10,
  },
  
}));

const DeveloperCard = ({ developer,count }) => {
  const { author, username, avatar, url, reponame, repourl, description } =
    developer;
  const classes = getStyles();
  const { cardContainer, cardTitle } = classes;

  const [text, setText] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <Box className={cardContainer}>
      <Box sx={{ display: "flex", alignItems: 'flex-start',justifyContent: "space-between" }}>
        <Link href={url} target="_blank" title={author} underline="none" sx={{marginRight: 1, }}>
          {count}
        </Link>
          <Link href={url} target="_blank" underline="hover" title={author} sx={{margin: "0 16px" }}>
            <Avatar alt={author} src={avatar} sx={{ width: 48, height: 48 }} />
          </Link>
        <Box sx={{ display: "flex",flexGrow: 1, alignItems: 'flex-start',flexWrap:"wrap" }}>
          <Box sx={{ display: "flex", flexGrow: 1, flexWrap:"wrap"}}>
            <Box sx={{ display: "flex", flexDirection: "column", flex:"1 0 0",flexWrap:"wrap" }}>
              <Typography variant="h2">
                <Link
                  href={url}
                  target="_blank"
                  underline="hover"
                  className={cardTitle}
                  color="secondary.main"
                  title={author}
                >
                  {" "}
                  {author}
                </Link>
              </Typography>
              <Link href={url} target="_blank" underline="hover" title={author}>
                {username}
              </Link>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column",flex:"1 0 0" }}>
              <Typography variant="span">
                <LocalFireDepartmentIcon sx={{ width: 16, height: 16,marginRight: 0.5, color: "#db6d28"}}/>POPULAR REPO</Typography>
              <Typography>
                <Link
                  href={repourl}
                  target="_blank"
                  underline="hover"
                  color="secondary.main"
                  sx={{ fontWeight: 600 }}
                  title={author}
                >
                  {" "}
                  <BookOutlinedIcon color="primary" sx={{ marginRight: 0.5, width: 16 }} />
                  {reponame}
                </Link>
              </Typography>
              <Typography >{description ? "description" : "no description"}</Typography>
            </Box>
          </Box>
          <Box sx={{ width: "170px", display: "flex", justifyContent: "space-between"}}>

            <Button sx={{fontSize: 12, padding: "3px 12px" }} onClick={() => setColor(!color)}>
              {color ? (
                <FavoriteIcon sx={{ width: 16, height: 16,marginRight: 0.5, color: "#db61a2"}}/>
                ) : 
                <FavoriteBorderIcon sx={{ width: 16, height: 16,marginRight: 0.5, color: "#db61a2"}}/>
              }
              <Typography variant="span">Sponsor</Typography>
            </Button> 

            <Button sx={{fontSize: 12, padding: "3px 12px", width: 72}} onClick={() => setText(!text)}>
              <Typography variant="span">{text? "unfollow" : "follow"}</Typography>
            </Button> 

          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DeveloperCard;
