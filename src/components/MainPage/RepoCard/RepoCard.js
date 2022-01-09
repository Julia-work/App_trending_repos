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
    paddingRight: 10,
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
      <Box className={classes.flexContainer} sx={{flexWrap: 'nowrap', alignItems:"start"}}>
        <Typography variant="h2" >
          <Link
            href={repo.repourl}
            underline="hover"
            className={classes.cardTitle}
            color="secondary.main"
            title={repo.author}
          >
            {" "}
            <BookOutlinedIcon color="primary" sx={{ marginRight: 0.5 }}/>
            {`${repo.author} / ${repo.reponame}`}
          </Link>
        </Typography>
        <ButtonStar />
      </Box>
      <Typography
        variant="body1"
        gutterBottom
        fontSize={14}
        margin="5px 0"
      >
        {repo.repodesc}
      </Typography>

      <Box className={[classes.flexContainer, classes.cardFooter].join(" ")} sx={{flexWrap: 'wrap'}}>
        <Box className={classes.flexContainer} sx={{flexWrap: 'wrap'}}>
          <List className={classes.flexContainer} >
            {repo.language ? (
              <ListItem disablePadding  sx={{ marginRight: 2 }}>
                <Typography sx={{ fontSize: 12 }}>{repo.language}</Typography>
              </ListItem>
            ) : null}

            {repo.stars ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Link href={"#"} underline="none" sx={{ fontSize: 12 }}>
                  {" "}
                  <StarOutlineIcon fontSize="small" sx={{ marginRight: 0.5 }}/>
                  {repo.stars}
                </Link>
              </ListItem>
            ) : null}

            {repo.forks ? (
              <ListItem disablePadding sx={{ marginRight: 2 }}>
                <Link href={"#"} underline="none" sx={{ fontSize: 12 }} >
                  {" "}
                  <AccountTreeOutlinedIcon
                    fontSize="small"
                    sx={{ marginRight: 0.5 }}
                  />
                  {repo.forks}
                </Link>
              </ListItem>
            ) : null}
          </List>

          <Box className={classes.flexContainer}>
            <Typography component="span" sx={{ marginRight: 0.5, fontSize:12 }}>
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

        <Box className={classes.flexContainer} sx={{padding: "8px 0"}}>
          <StarOutlineIcon fontSize="small" />
          <Typography
            sx={{ fontSize: 12 }}
          >{`${repo.laststars} stars today`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default RepoCard;
