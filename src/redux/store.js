import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import developersReducer from "./developers/developersReducer";
import reposReducer from "./repos/reposReducer";

const rootReducer = combineReducers({
  repos: reposReducer,
  developers: developersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)