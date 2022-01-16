import React from "react";

import { makeStyles } from "@mui/styles";
// mui components
import { Box, Link, Typography, Avatar, List, ListItem } from "@mui/material";
// icons
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
// my components
import ButtonStar from "../../../ButtonStar";

const getStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: 16,
    borderBottom: theme.components.border.main,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 600,
    paddingRight: 10,
    paddingBottom: 5,
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardFooter: {
    "& > :last-child": {
      justifyContent: "flex-end",
    },
  },
}));

const RepoCard = ({ repo }) => {
  const {
    author,
    repourl,
    reponame,
    repodesc,
    language,
    stars,
    forks,
    builtby,
    laststars,
  } = repo;

  const classes = getStyles();
  const { cardContainer, cardTitle, flexContainer, cardFooter } = classes;

  return (
    <Box className={cardContainer}>
      <Box
        className={flexContainer}
        sx={{ flexWrap: "wrap", alignItems: "start" }}>
        <Typography variant="h2">
          <Link
            href={repourl}
            underline="hover"
            className={cardTitle}
            color="secondary.main"
            title={author}>
            {" "}
            <BookOutlinedIcon color="primary" sx={{ marginRight: 0.5 }} />
            {`${author} / ${reponame}`}
          </Link>
        </Typography>

        <ButtonStar />
      </Box>
      <Typography variant="body1" gutterBottom fontSize={14} margin="5px 0">
        {repodesc}
      </Typography>

      <Box
        className={[flexContainer, cardFooter].join(" ")}
        sx={{ flexWrap: "wrap" }}>
        <Box className={flexContainer} sx={{ flexWrap: "wrap" }}>
          <List className={classes.flexContainer}>
            {language ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Typography sx={{ fontSize: 12 }}>{language}</Typography>
              </ListItem>
            ) : null}

            {stars ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Link href={"#"} underline="none" sx={{ fontSize: 12 }}>
                  {" "}
                  <StarOutlineIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  {stars}
                </Link>
              </ListItem>
            ) : null}

            {forks ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Link href={"#"} underline="none" sx={{ fontSize: 12 }}>
                  {" "}
                  <AccountTreeOutlinedIcon
                    fontSize="small"
                    sx={{ marginRight: 0.5 }}
                  />
                  {forks}
                </Link>
              </ListItem>
            ) : null}
          </List>

          <Box className={flexContainer}>
            <Typography
              component="span"
              sx={{ marginRight: 0.5, fontSize: 12 }}>
              Built by:
            </Typography>
            <List className={flexContainer}>
              {builtby.map(({ url, username, avatar }) => (
                <ListItem key={url} disablePadding sx={{ marginRight: 1 }}>
                  <Link
                    href={url}
                    underline="none"
                    title={username}
                    target="_blank">
                    {" "}
                    <Avatar
                      alt={username}
                      src={avatar}
                      sx={{ width: 24, height: 24 }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box className={flexContainer} sx={{ padding: "8px 0" }}>
          <StarOutlineIcon fontSize="small" />
          <Typography
            sx={{ fontSize: 12 }}>{`${laststars} stars today`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default RepoCard;
