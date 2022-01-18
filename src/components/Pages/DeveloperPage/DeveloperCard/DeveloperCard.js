import React from "react";
import { useState } from "react";
import { Box, Link, Typography, Avatar, Button } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CardTitle from "../../../CardTitle";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const DeveloperCard = ({ developer, count }) => {
  const [text, setText] = useState(false);
  const [color, setColor] = useState(false);
  const { author, username, avatar, url, reponame, repourl, description } =
    developer;

  return (
    <Box
      sx={{
        padding: 2,
        borderBottom: "1px solid #30363d",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Link href={url} title={author} sx={{ marginRight: 1, fontSize:12 }}>
          {count}
        </Link>
        <Link
          href={url}
          underline="hover"
          title={author}
          sx={{ margin: "0 16px" }}
        >
          <Avatar alt={author} src={avatar} sx={{ width: 48, height: 48 }} />
        </Link>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{
            display: "flex",
            flexGrow: 1,
          flexWrap: "wrap"
          }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexBasis: "35%",
                flexWrap: "wrap",
                marginRight:2
              }}
            >
              <CardTitle url={url} title={author}>
                {author}
              </CardTitle>
              <Link href={url} underline="hover" title={author}>
                {username}
              </Link>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", flex: "1 0 0" }}
            >
              <Typography variant="span" fontSize={12}>
                <LocalFireDepartmentIcon
                  sx={{
                    width: 16,
                    height: 16,
                    marginRight: 0.5,
                    color: "#db6d28",
                  }}
                />
                POPULAR REPO
              </Typography>
              <Typography>
                <Link
                  href={repourl}
                  underline="hover"
                  color="secondary.main"
                  sx={{ fontWeight: 600 }}
                  title={author}
                >
                  <BookOutlinedIcon
                    color="primary"
                    sx={{ marginRight: 0.5, width: 16 }}
                  />
                  {reponame}
                </Link>
              </Typography>
              <Typography
              fontSize={12}
              width={230}
              >
                {description ? description : loremIpsum}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{ fontSize: 12, padding: "3px 12px", marginRight: 1 }}
              onClick={() => setColor((s) => !s)}
            >
              {color && (
                <FavoriteIcon
                  sx={{
                    width: 16,
                    height: 16,
                    marginRight: 0.5,
                    color: "#db61a2",
                  }}
                />
              )}
              {!color && (
                <FavoriteBorderIcon
                  sx={{
                    width: 16,
                    height: 16,
                    marginRight: 0.5,
                    color: "#db61a2",
                  }}
                />
              )}
              <Typography variant="span">Sponsor</Typography>
            </Button>
            <Button
              sx={{ fontSize: 12, padding: "3px 12px", width: 72 }}
              onClick={() => setText(!text)}
            >
              <Typography variant="span">
                {text && "unfollow"}
                {!text && "follow"}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DeveloperCard;
