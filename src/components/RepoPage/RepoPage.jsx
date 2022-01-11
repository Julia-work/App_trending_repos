import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
// mui components
import { Box } from "@mui/system";
// my components
import TitleBox from "../TitleBox";
import NavButtonsBox from "../NavButtonsBox";
import SelectLabels from "../Select/Select.jsx";
import RepoCard from "./RepoCard";
// methods
import { getRepos, getOption as getOptionRep } from "../../redux/repos/actionRepos";


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
    display: "flex",
    justifyContent: 'space-between'
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
          <Box className={classes.header}>
            <NavButtonsBox />
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <SelectLabels defaultValue = {optionsToFetch.since} getOption={getOptionRep}/>
            <SelectLabels defaultValue = {optionsToFetch.since} getOption={getOptionRep}/>
            <SelectLabels defaultValue = {optionsToFetch.since} getOption={getOptionRep}/>
            </Box>
          </Box>
          {repos.map((repo) => (
            <RepoCard key={repo.repourl} repo={repo} />
          ))}
        </Box>
      </Box>
    </main>
  );
};

export default RepoPage;
