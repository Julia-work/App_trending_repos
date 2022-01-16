import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import TitleBox from "../../TitleBox";
import RepoCard from "./RepoCard";
import HeaderContent from "../../HeaderContent";
import Spinner from "../../Spinner";
import ErrorMassage from "../../ErrorMassage";
import { getRepos } from "../../../redux/repos/actionRepos";

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

  const storeRepos = useSelector((store) => store.repos);
  const {
    items: repositories,
    options: optionsToFetch,
    isFetching,
    isFetchError,
  } = storeRepos;

  useEffect(() => {
    dispatch(getRepos(optionsToFetch));
  }, [optionsToFetch]);

  return (
    <main>
      <TitleBox subTitle="See what the GitHub community is most excited about today." />
      <Box className={contentWrapper}>
        <Box className={content}>
          <HeaderContent />
          {isFetchError === true ? (
            <ErrorMassage />
          ) : isFetching === false && repositories.length >= 1 ? (
            repositories.map((repo) => (
              <RepoCard key={repo.repourl} repo={repo} />
            ))
          ) : isFetching === false && repositories.length < 1 ? (
            <ErrorMassage />
          ) : (
            <Spinner />
          )}
        </Box>
      </Box>
    </main>
  );
};

export default RepoPage;
