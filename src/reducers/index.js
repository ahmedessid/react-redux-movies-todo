import { combineReducers } from "redux";
import movies from "./movies";
import age from "./age";

export default combineReducers({
  movies,
  age
});
