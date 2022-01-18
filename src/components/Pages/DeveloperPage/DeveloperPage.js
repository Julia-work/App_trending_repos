import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import DeveloperCard from "./DeveloperCard";
import HeaderContent from "../../HeaderContent";
import TitleBox from "../../TitleBox";
import Spinner from "../../Spinner";
import ErrorMessage from "../../ErrorMessage";
import ErrorBoundary from "../../ErrorBoundary";
import { getData } from "../../../redux/action";
import { NAME_ITEMS_DEVOPS } from "../../../redux/constants";

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
  const dispatch = useDispatch();

  const store = useSelector((store) => store);
  const {
    [NAME_ITEMS_DEVOPS]: developers,
    optionsToFetchDevelopers,
    isFetching,
    isFetchError,
  } = store;

  useEffect(() => {
    dispatch(getData(optionsToFetchDevelopers, NAME_ITEMS_DEVOPS));
  }, [optionsToFetchDevelopers]);

  return (
    <main>
      <TitleBox subTitle="These are the developers building the hot tools today." />
      <Box className={classes.contentWrapper}>
        <Box className={classes.content}>
          <ErrorBoundary>
            <HeaderContent />
          </ErrorBoundary>
          <ErrorBoundary>
            {isFetchError && <ErrorMessage />}
            {isFetching && <Spinner />}
            {!isFetchError &&
              !isFetching &&
              developers.length >= 1 &&
              developers.map((developer, index) => (
                <DeveloperCard
                  key={developer.repourl}
                  developer={developer}
                  count={index + 1}
                />
              ))}
            {!isFetching && developers.length < 1 && <ErrorMessage />}
          </ErrorBoundary>
        </Box>
      </Box>
    </main>
  );
};

export default DeveloperPage;
