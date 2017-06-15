import {topicAction} from "actions/actionTypes";
import Constants from "utils/Constants";
import {getApi} from "services/restService";


export const getTopicsSuccess = (topicList) => {
  return {
    type: topicAction.GET_TOPICS_SUCCESS,
    topicList,
    isLoading: false
  }
};

export const getTopics = (filter) => {
  return (dispatch) => {
    getApi((response) => {
      dispatch(getTopicsSuccess({topicList: response.data}))
    }, Constants.REST_API.TOPICS, true);
  };
};

export const getTopicDetailSuccess = (topic) => {
  return {
    type: topicAction.GET_TOPIC_DETAIL_SUCCESS,
    topic,
    isLoading: false
  }
};

export const getTopicDetail = (topicId) => {
  return (dispatch) => {
    getApi((response) => {
      dispatch(getTopicDetailSuccess({topic: response.data}))
    }, `${Constants.REST_API.TOPICS}/${topicId}`, true);
  };
};