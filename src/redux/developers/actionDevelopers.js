import githubTrends from "github-trends-api";

import { setDevelopers, setOption, setIsFetching } from "./developersReducer";

export const getDevelopers = (options) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));

    if(options.language === "Any") {
      options.language = ""
    }
    if(options.spoken_language_code === "Any") {
      options.spoken_language_code = ""
    }
    const response = await githubTrends(options);
    dispatch(setDevelopers(response));
  };
};

export const getOptionToFetch = (option, value) => {
  return (dispatch) => {
    dispatch(setOption(option, value));
  };
};
