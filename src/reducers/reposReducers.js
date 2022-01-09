const SET_REPOS = "SET_REPOS";

const defaultState = {
  optionsToFetch: {section: '', language: '', since: '', spoken_language_code: ''},
  items: [],
  isFetching: true,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload:repos})
