import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Link, Typography, Avatar, List, ListItem } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CardTitle from "../../../CardTitle";
import ButtonStar from "../../../ButtonStar";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: 16,
    borderBottom: theme.components.border.main,
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
  const classes = useStyles();
  const { cardContainer, flexContainer, cardFooter } = classes;

  return (
    <Box className={cardContainer}>
      <Box
        className={flexContainer}
        sx={{ flexWrap: "wrap", alignItems: "start" }}
      >
        <CardTitle url={repourl} title={author}>
          <BookOutlinedIcon color="primary" sx={{ marginRight: 0.5 }} />
          {`${author} / ${reponame}`}
        </CardTitle>
        <ButtonStar />
      </Box>
      <Typography variant="body1" gutterBottom fontSize={14} margin="5px 0">
        {repodesc}
      </Typography>
      <Box
        className={[flexContainer, cardFooter].join(" ")}
        sx={{ flexWrap: "wrap" }}
      >
        <Box className={flexContainer} sx={{ flexWrap: "wrap" }}>
          <List className={flexContainer}>
            {language && (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Typography sx={{ fontSize: 12 }}>{language}</Typography>
              </ListItem>
            )}
            {stars && (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Link href={`${repourl}/stargazers`} sx={{ fontSize: 12 }}>
                  <StarOutlineIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  {stars}
                </Link>
              </ListItem>
            )}
            {forks && (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Link
                  href={`${repourl}/network/members.${reponame}`}
                  sx={{ fontSize: 12 }}
                >
                  <AccountTreeOutlinedIcon
                    fontSize="small"
                    sx={{ marginRight: 0.5 }}
                  />
                  {forks}
                </Link>
              </ListItem>
            )}
          </List>
          <Box className={flexContainer}>
            <Typography
              component="span"
              sx={{ marginRight: 0.5, fontSize: 12 }}
            >
              Built by:
            </Typography>
            <List className={flexContainer}>
              {builtby.map(({ url, username, avatar }) => (
                <ListItem key={url} disablePadding sx={{ marginRight: 1 }}>
                  <Link href={url} title={username}>
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
          <Typography sx={{ fontSize: 12 }}>
            {`${laststars} stars today`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default RepoCard;
