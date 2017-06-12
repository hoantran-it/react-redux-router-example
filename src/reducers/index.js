import {combineReducers} from "redux";
import  user from "./userReducers";
import topic from "./topicReducers";


export default combineReducers({
  user,
  topic
});
