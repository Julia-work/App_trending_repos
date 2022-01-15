import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import githubTrends from "github-trends-api";
import { makeStyles } from "@mui/styles";
// mui components
import { Box } from "@mui/system";
// my components
import DeveloperCard from "./DeveloperCard";
import HeaderContent from "../../HeaderContent";
import TitleBox from "../../TitleBox";
import Spinner from "../../Spinner";
import ErrorMassage from "../../ErrorMassage";

import { ERROR_PAGE_PATH_NAME } from "../../../constants";

// methods
import { getDevelopers } from "../../../redux/developers/actionDevelopers";
import { getOptionToFetch as getOptionDev } from "../../../redux/developers/actionDevelopers";

const getStyles = makeStyles((theme) => ({
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
  const classes = getStyles();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const storeDevelopers = useSelector((store) => store.developers);
  const {
    items: developers,
    options: optionsToFetch,
    isFetching,
    isFetchError,
  } = storeDevelopers;

  useEffect(() => {
    dispatch(getDevelopers(optionsToFetch));
  }, [optionsToFetch]);

  return (
    <main>
      <TitleBox subTitle="These are the developers building the hot tools today." />
      <Box className={classes.contentWrapper}>
        <Box className={classes.content}>
          <HeaderContent
            getOptionToFetch={getOptionDev}
            store={storeDevelopers}
          />
          {isFetchError === true ? (
            <ErrorMassage />
          ) : isFetching === false && developers.length ? (
            developers.map((developer, index) => (
              <DeveloperCard
                key={developer.repourl}
                developer={developer}
                count={index + 1}
              />
            ))
          ) : isFetching === false && developers.length < 1 ? (
            <ErrorMassage />
          ) : (
            <Spinner />
          )}
        </Box>
      </Box>
    </main>
  );
};

export default DeveloperPage;
