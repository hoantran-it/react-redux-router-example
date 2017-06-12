import {topicAction} from "actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case topicAction.GET_TOPICS_SUCCESS:
      return {
        ...action.topicList,
        isLoading: false
      };
    case topicAction.GET_TOPIC_DETAIL_SUCCESS:
      return {
        ...action.topic,
        isLoading: false
      };
    default:
      return state;
  }
};
