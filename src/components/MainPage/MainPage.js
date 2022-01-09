import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { AppBar, Container, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

import { getRepos } from "../actions/repos";
import TitleBox from "../TitleBox/TitleBox";
import NavButtonsBox from "../NavButtonsBox/NavButtonsBox";

import RepoCard from "./RepoCard/RepoCard";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    maxWidth: 1046,
    margin: "0 auto",
    marginTop: 40,
    padding: "0 16px",
  },
  content: {
    borderRadius: 6,
    border: theme.components.border.main,
  },
  header: {
    backgroundColor: theme.palette.primary.backgroundLight,
    borderRadius: "6px 6px 0 0",
    borderBottom: theme.components.border.main,
    padding: 16,
  },
}));

const MainPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <main>
      <Box sx={{ flexGrow: 1 }}>
        <TitleBox subTitle="See what the GitHub community is most excited about today." />
        <Box className={classes.contentWrapper}>
          <Box className={classes.content}>
            <Box className={classes.header}>
              <NavButtonsBox />
            </Box>
            {repos.map((repo) => (
              <RepoCard key={repo.repourl} repo={repo} />
            ))}
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default MainPage;
