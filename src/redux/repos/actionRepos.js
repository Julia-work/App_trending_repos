import githubTrends from "github-trends-api";

import { setRepos, setOption } from "./reposReducer";

export const getRepos = (options) => {
  return async (dispatch) => {
    const response = await githubTrends(options);
    dispatch(setRepos(response));
  };
};

export const getOption = (option, value) => {
  return (dispatch) => {
    dispatch(setOption(option, value));
  };
};
