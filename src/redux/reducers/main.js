import { combineReducers } from "redux";
import { DonatReducer } from "./reducer";

const rootred = combineReducers({
  DonatReducer,
});

export default rootred;

// combine more then 1 reducer
