import React from "react";
import {
  Box,
  Link,
  Typography,
  Item,
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
    color: `${theme.palette.secondary.main} !important`,
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
    "& li": {
      fontSize: `14px !important`,
    },
    "& span": {
      fontSize: `14px !important`,
    },
  },
}));

const RepoCard = (props) => {
  const repo = props.repo;
  const classes = useStyles();

  return (
    <Box className={classes.cardContainer}>
      <Typography variant="h2" gutterBottom lineHeight={1.25} fontSize={20}>
        <Link
          href={repo.repourl}
          underline="hover"
          className={classes.cardTitle}
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

      <Box className={`${classes.flexContainer} ${classes.cardFooter}`}>
        <Box className={classes.flexContainer}>
          <List className={classes.flexContainer}>
            {repo.language ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <ListItemText primary={repo.language} />
              </ListItem>
            ) : null}

            <ListItem disablePadding sx={{ marginRight: 2 }}>
              <Link href={"#"} underline="none">
                {" "}
                <StarOutlineIcon fontSize="small" sx={{ marginRight: 1 }} />
                {repo.stars}
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ marginRight: 2 }}>
              <Link href={"#"} underline="none">
                {" "}
                <AccountTreeOutlinedIcon
                  fontSize="small"
                  sx={{ marginRight: 1 }}
                />
                {repo.forks}
              </Link>
            </ListItem>
          </List>

          <Box className={classes.flexContainer}>
            <Typography component="span" sx={{ marginRight: 1 }}>
              Built by
            </Typography>
            <List className={classes.flexContainer}>
              {repo.builtby.map((autor) => (
                <ListItem disablePadding sx={{ marginRight: 1 }}>
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
          <Typography>{`${repo.laststars} stars today`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default RepoCard;
