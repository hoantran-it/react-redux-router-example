import {topicAction} from "actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case topicAction.FETCH_TOPICS_SUCCESS:
      return action.topicList;
    default:
      return state;
  }
};
