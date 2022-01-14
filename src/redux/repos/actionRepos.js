import githubTrends from "github-trends-api";

import { setRepos, setOption, setIsFetching,setIsFetchError } from "./reposReducer";

export const getRepos = (options) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      dispatch(setIsFetchError(false));
  
      if (options.language === "Any") {
        options.language = "";
      }
      if (options.spoken_language_code === "Any") {
        options.spoken_language_code = "";
      }
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
