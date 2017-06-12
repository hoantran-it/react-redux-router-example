import {topicAction} from "actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case topicAction.GET_TOPICS_SUCCESS:
      return action.topicList;
    case topicAction.GET_TOPIC_DETAIL_SUCCESS:
      return action.topic;
    default:
      return state;
  }
};
