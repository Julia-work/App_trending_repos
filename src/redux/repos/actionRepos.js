import githubTrends from "github-trends-api";

import { setRepos, setOption, setIsFetching } from "./reposReducer";

export const getRepos = (options) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));

    if (options.language === "Any") {
      options.language = "";
    }
    if (options.spoken_language_code === "Any") {
      options.spoken_language_code = "";
    }
    const response = await githubTrends(options);
    dispatch(setRepos(response));
  };
};

export const getOptionToFetch = (option, value) => {
  return (dispatch) => {
    dispatch(setOption(option, value));
  };
};
