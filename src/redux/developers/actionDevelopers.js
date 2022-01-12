import githubTrends from "github-trends-api";

import { setDevelopers, setOption } from "./developersReducer";

export const getDevelopers = (options) => {
  return async (dispatch) => {
    const response = await githubTrends(options);
    dispatch(setDevelopers(response));
  };
};

export const getOptionToFetch = (option, value) => {
  return (dispatch) => {
    dispatch(setOption(option, value));
  };
};
