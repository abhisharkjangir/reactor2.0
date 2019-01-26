import { combineReducers } from "redux";

// Home Reducer
import { HOME_STATE_KEY } from "./app/routes/home/HomeConstants";
import HomeReducer from "./app/routes/home/HomeReducer";

export default combineReducers({
  [HOME_STATE_KEY]: HomeReducer
});
