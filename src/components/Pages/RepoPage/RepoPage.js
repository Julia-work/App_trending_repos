import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import TitleBox from "../../TitleBox";
import RepoCard from "./RepoCard";
import HeaderContent from "../../HeaderContent";
import Spinner from "../../Spinner";
import ErrorMessage from "../../ErrorMessage";
import ErrorBoundary from "../../ErrorBoundary";
import { getData } from "../../../redux/action";
import {NAME_ITEMS_REPO} from '../../../redux/constants'

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

const RepoPage = () => {
  const classes = getStyles();
  const { contentWrapper, content } = classes;
  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  const { [NAME_ITEMS_REPO]:repos, optionsToFetchRepos, isFetching, isFetchError } = store;

  useEffect(() => {
    dispatch(getData(optionsToFetchRepos, NAME_ITEMS_REPO));
  }, [optionsToFetchRepos]);

  return (
    <main>
      <TitleBox subTitle="See what the GitHub community is most excited about today." />
      <Box className={contentWrapper}>
        <Box className={content}>
          <ErrorBoundary>
            <HeaderContent />
          </ErrorBoundary>
          <ErrorBoundary>
            {isFetchError && <ErrorMessage />}
            {isFetching && <Spinner />}
            {!isFetching &&
              repos.length >= 1 &&
              repos.map((repo) => <RepoCard key={repo.repourl} repo={repo} />)}
            {!isFetching && repos.length < 1 && <ErrorMessage />}
          </ErrorBoundary>
        </Box>
      </Box>
    </main>
  );
};

export default RepoPage;
