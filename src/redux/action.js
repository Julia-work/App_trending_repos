import githubTrends from "github-trends-api";

import {
  setData,
  setIsFetching,
  setIsFetchError,
} from "./actionCreators";

export const getData = (options, nameItems) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await githubTrends(options);
      dispatch(setData(response, nameItems));
      dispatch(setIsFetching(false));
      dispatch(setIsFetchError(false));
    } catch (e) {
      dispatch(setIsFetchError(true));
      dispatch(setIsFetching(false));
    }
  };
};