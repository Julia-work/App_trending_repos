import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

import { getDevelopers } from "../actions/developers";

import TitleBox from "../TitleBox/TitleBox";
import NavButtonsBox from "../NavButtonsBox/NavButtonsBox";
// import RepoCard from "../MainPage/RepoCard/RepoCard";
import DeveloperCard from "./DeveloperCard/DeveloperCard";

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

const DeveloperPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const developers = useSelector((state) => state.developers.items);

  const optionsToFetch = useSelector((state) => state.developers.optionsToFetch);

  useEffect(() => {
    dispatch(getDevelopers(optionsToFetch));
  }, []);

  return (
    <main>
      <TitleBox subTitle="These are the developers building the hot tools today." />
      <Box className={classes.contentWrapper}>
        <Box className={classes.content}>
          <Box className={classes.header}>
            <NavButtonsBox />
          </Box>
          {developers.map((developer) => (
            <DeveloperCard key={developer.url} developer={developer} />
          ))}
        </Box>
      </Box>
    </main>
  );
};

export default DeveloperPage;
