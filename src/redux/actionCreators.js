import {
  SET_DATA,
  SET_IS_FETCHING,
  SET_FETCH_ERROR,
  SET_OPTION_REP,
  SET_OPTION_DEV,
} from "./constants";

export const setData = (data, nameItems) => ({
  type: SET_DATA,
  payload: {
    nameItems, // repos/developers
    data
  },
});

export const setIsFetching = (boolean) => ({
  type: SET_IS_FETCHING,
  payload: boolean,
});

export const setIsFetchError = (boolean) => ({
  type: SET_FETCH_ERROR,
  payload: boolean,
});

export const setOptionReposToFetch = (option, value) => ({
  type: SET_OPTION_REP,
  payload: {
    option,
    value
  },
});

export const setOptionDevopsToFetch = (option, value) => ({
  type: SET_OPTION_DEV,
  payload: {
    option,
    value
  },
});
