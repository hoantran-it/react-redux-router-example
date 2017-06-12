import {combineReducers} from "redux";
import book from "./bookReducers";
import topic from "./topicReducers";


export default combineReducers({
  book,
  topic
});
