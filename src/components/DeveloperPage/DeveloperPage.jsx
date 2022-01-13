import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
// mui components
import { Box } from "@mui/system";
// my components
import DeveloperCard from "./DeveloperCard";
import HeaderContent from "../HeaderContent";
import TitleBox from "../TitleBox";
// methods
import { getDevelopers } from "../../redux/developers/actionDevelopers";
import { getOptionToFetch as getOptionDev} from "../../redux/developers/actionDevelopers";

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

const DeveloperPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const storeDevelopers = useSelector((store) => store.developers);
  const developers = storeDevelopers.items;
  const optionsToFetch = storeDevelopers.options;

  useEffect(() => {
    dispatch(getDevelopers(optionsToFetch));
  }, [optionsToFetch]);

  return (
    <main>
      <TitleBox subTitle="These are the developers building the hot tools today." />
      <Box className={classes.contentWrapper}>
        <Box className={classes.content}>
          <HeaderContent getOptionToFetch={getOptionDev} store={storeDevelopers}/>
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
