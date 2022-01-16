import githubTrends from "github-trends-api";

import {
  setDevelopers,
  setOption,
  setIsFetching,
  setIsFetchError,
} from "./developersReducer";

export const getDevelopers = (options) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      dispatch(setIsFetchError(false));

      const response = await githubTrends(options);
      dispatch(setDevelopers(response));
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
