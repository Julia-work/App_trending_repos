import {
  SET_DATA,
  SET_IS_FETCHING,
  SET_FETCH_ERROR,
  SET_OPTION_REP,
  SET_OPTION_DEV,
  NAME_ITEMS_REPO,
  NAME_ITEMS_DEVOPS,
} from "./constants";

const defaultState = {
  optionsToFetchRepos: {
    section: "",
    language: "",
    since: "daily",
    spoken_language_code: "",
  },
  optionsToFetchDevelopers: {
    section: "developers",
    language: "",
    since: "monthly",
    spoken_language_code: "",
  },
  [NAME_ITEMS_REPO]: [],
  [NAME_ITEMS_DEVOPS]: [],
  isFetching: true,
  isFetchError: false,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        [action.payload.nameItems]: action.payload.data,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    case SET_OPTION_REP:
      return {
        ...state,
        optionsToFetchRepos: {
          ...state.optionsToFetchRepos,
          [action.payload.option]: action.payload.value,
        },
      };
    case SET_OPTION_DEV:
      return {
        ...state,
        optionsToFetchDevelopers: {
          ...state.optionsToFetchDevelopers,
          [action.payload.option]: action.payload.value,
        },
      };
    default:
      return state;
  }
}
