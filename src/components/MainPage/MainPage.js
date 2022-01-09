import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const optionsToFetch = useSelector((state) => state.repos.optionsToFetch);

  useEffect(() => {
    dispatch(getRepos(optionsToFetch));
  }, []);

  return (
    <main>
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
    </main>
  );
};

export default MainPage;
