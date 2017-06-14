import {combineReducers} from "redux";
import user from "./userReducers";
import topic from "./topicReducers";
import comment from "./commentReducers";


export default combineReducers({
  user,
  topic,
  comment
});
