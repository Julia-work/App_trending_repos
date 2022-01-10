import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
// mui components
import { Box } from "@mui/system";
// my components
import DeveloperCard from "./DeveloperCard";
import NavButtonsBox from "../NavButtonsBox";
import TitleBox from "../TitleBox";
// methods
import { getDevelopers } from "../../redux/developers/actionDevelopers";


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

  const developers = useSelector((store) => store.developers.items);

  const optionsToFetch = useSelector(
    (store) => store.developers.options
  );

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
          {developers.map((developer, index) => {
            return(
              <DeveloperCard key={developer.repourl} developer={developer} count={index+1}/>
            )}
          )}
        </Box>
      </Box>
    </main>
  );
};

export default DeveloperPage;
