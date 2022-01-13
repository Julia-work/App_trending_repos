const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_OPTION_REP = "SET_OPTION_REP";

const defaultState = {
  options: {
    section: "",
    language: "Any",
    since: "daily",
    spoken_language_code: "Any",
  },
  items: [],
  isFetching: true,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_OPTION_REP:
      return {
        ...state,
        options: {
          ...state.options,
          [action.option]: action.value,
        },
      };
    default:
      return state;
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setIsFetching = (boolean) => ({ type: SET_IS_FETCHING, payload: boolean });

export const setOption = (option, value) => {
  return {
    type: SET_OPTION_REP,
    option,
    value,
  };
};
