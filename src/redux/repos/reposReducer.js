const SET_REPOS = "SET_REPOS";
const SET_OPTION_REP = "SET_OPTION_REP";

const defaultState = {
  options: {
    section: "",
    language: "",
    since: "daily",
    spoken_language_code: "",
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

export const setOption = (option, value) => ({
  type: SET_OPTION_REP,
  option,
  value,
});
