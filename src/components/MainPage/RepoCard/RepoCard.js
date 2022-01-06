import React from "react";
import ButtonStar from "../../ButtonStar/ButtonStar";
import {
  Box,
  Link,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: 16,
    borderBottom: theme.components.border.main,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 4,
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

const RepoCard = (props) => {
  const repo = props.repo;
  const classes = useStyles();

  return (
    <Box className={classes.cardContainer}>
      <ButtonStar />
      <Typography variant="h2" gutterBottom>
        <Link
          href={repo.repourl}
          underline="hover"
          className={classes.cardTitle}
          color="secondary.main"
          title={repo.author}
        >
          {" "}
          <BookOutlinedIcon color="primary" />
          {`${repo.author} / ${repo.reponame}`}
        </Link>
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        component="div"
        fontSize={14}
        marginRight={24}
      >
        {repo.repodesc}
      </Typography>

      <Box className={[classes.flexContainer, classes.cardFooter].join(" ")}>
        <Box className={classes.flexContainer}>
          <List className={classes.flexContainer}>
            {repo.language ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <ListItemText primary={repo.language} />
              </ListItem>
            ) : null}

            {repo.stars ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Link href={"#"} underline="none" sx={{ fontSize: "14px" }}>
                  {" "}
                  <StarOutlineIcon fontSize="small" sx={{ marginRight: 1 }} />
                  {repo.stars}
                </Link>
              </ListItem>
            ) : null}

            {repo.forks ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Link href={"#"} underline="none" sx={{ fontSize: "14px" }}>
                  {" "}
                  <AccountTreeOutlinedIcon
                    fontSize="small"
                    sx={{ marginRight: 1 }}
                  />
                  {repo.forks}
                </Link>
              </ListItem>
            ) : null}
          </List>

          <Box className={classes.flexContainer}>
            <Typography component="span" sx={{ marginRight: 1 }}>
              Built by
            </Typography>
            <List className={classes.flexContainer}>
              {repo.builtby.map((autor) => (
                <ListItem
                  key={autor.url}
                  disablePadding
                  sx={{ marginRight: 1 }}
                >
                  <Link
                    href={autor.url}
                    underline="none"
                    title={autor.username}
                    target="_blank"
                  >
                    {" "}
                    <Avatar
                      alt={autor.username}
                      src={autor.avatar}
                      sx={{ width: 24, height: 24 }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box className={classes.flexContainer}>
          <StarOutlineIcon fontSize="small" />
          <Typography
            sx={{ fontSize: "14px" }}
          >{`${repo.laststars} stars today`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default RepoCard;
