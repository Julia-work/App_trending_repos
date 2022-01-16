import githubTrends from "github-trends-api";

import { setRepos, setOption, setIsFetching,setIsFetchError } from "./reposReducer";

export const getRepos = (options) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      dispatch(setIsFetchError(false));

      const response = await githubTrends(options);
      dispatch(setRepos(response));
    } catch (e) {
      dispatch(setIsFetchError(true));
      dispatch(setIsFetching(false));
    }
  };
};

export const getOptionToFetch = (option, value) => {
  return (dispatch) => {
    dispatch(setOption(option, value));
  };
};
