const SET_DEVELOPERS = "SET_DEVELOPERS";

const defaultState = {
  options: {section: 'developers', language: '', since: 'monthly', spoken_language_code: ''},
  items: [],
  isFetching: true,
};

export default function developersReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DEVELOPERS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}

export const setDevelopers = (developers) => ({type: SET_DEVELOPERS, payload:developers})