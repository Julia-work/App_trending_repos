import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, Container, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

import { getRepos } from "../actions/repos";
import TitleBox from "../TitleBox/TitleBox";
import NavButtonsBox from "../NavButtonsBox/NavButtonsBox";

import Repo from "./Repo/Repo";

import '../../styles.scss'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 40,
    borderRadius: 6,
    border: "1px solid #30363d",
    margin: "0 auto"
  },
  navContainer: {
    backgroundColor: "#161B22",
    borderRadius: "6px 6px 0 0",
    padding: 24
  }
}));

const Main = () => {
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

        <Box maxWidth="md" className={classes.container}>
          <Box className={classes.navContainer}>
            <NavButtonsBox />
          </Box>

          {repos.map((repo) => (
            <Repo key={repo.repourl} repo={repo} />
          ))}
        </Box>
      </Box>
    </main>
  );
};

export default Main;
