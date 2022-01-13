import githubTrends from "github-trends-api";

import { setDevelopers, setOption } from "./developersReducer";

export const getDevelopers = (options) => {
  return async (dispatch) => {
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
