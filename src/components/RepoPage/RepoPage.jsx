import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
// mui components
import { Box } from "@mui/system";
// my components
import TitleBox from "../TitleBox";
import RepoCard from "./RepoCard";
import HeaderContent from "../HeaderContent";
// methods
import { getRepos, getOptionToFetch } from "../../redux/repos/actionRepos";

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
}));

const RepoPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const repos = useSelector((store) => store.repos.items);
  const optionsToFetch = useSelector((store) => store.repos.options);

  useEffect(() => {
    dispatch(getRepos(optionsToFetch));
  }, [optionsToFetch]);

  return (
    <main>
      <TitleBox subTitle="See what the GitHub community is most excited about today." />
      <Box className={classes.contentWrapper}>
        <Box className={classes.content}>
          <HeaderContent getOptionToFetch={getOptionToFetch} optionsToFetch={optionsToFetch} page="repo"/>
          {repos.map((repo) => (
            <RepoCard key={repo.repourl} repo={repo} />
          ))}
        </Box>
      </Box>
    </main>
  );
};

export default RepoPage;
