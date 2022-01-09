import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reposReducer from "./reposReducers";
import developersReducer from "./developersReducers";

const rootReducer = combineReducers({
  repos: reposReducer,
  developers: developersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
