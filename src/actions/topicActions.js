import {browserHistory} from 'react-router';
import {topicAction} from "actions/actionTypes";
import Constants from "utils/Constants";
import {getApi, postApi} from "services/restService";


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

export const createTopicSuccess = (newTopic) => {
  return {
    type: topicAction.CREATE_TOPIC_SUCCESS,
    newTopic,
    isLoading: false
  }
};

export const createTopic = (topic) => {
  return (dispatch) => {
    postApi((response) => {
      dispatch(createTopicSuccess({newTopic: response.data}));
      browserHistory.push(`/topic-detail/${response.data.id}`);
    }, Constants.REST_API.TOPICS, topic, true);
  };
};