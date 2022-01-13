const SET_DEVELOPERS = "SET_DEVELOPERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_OPTION_DEV = "SET_OPTION_DEV";

const defaultState = {
  options: {
    section: "developers",
    language: "Any",
    since: "monthly",
    spoken_language_code: "Any",
  },
  items: [],
  isFetching: true,
};

export default function developersReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DEVELOPERS:
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
    case SET_OPTION_DEV:
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

export const setDevelopers = (developers) => ({
  type: SET_DEVELOPERS,
  payload: developers,
});
export const setIsFetching = (boolean) => ({
  type: SET_IS_FETCHING,
  payload: boolean,
});

export const setOption = (option, value) => ({
  type: SET_OPTION_DEV,
  option,
  value,
});
