import axios from "axios";
import {topicAction} from "actions/actionTypes";
import localStorage from "LocalStorage";

export const getTopicsSuccess = (topicList) => {
  return {
    type: topicAction.GET_TOPICS_SUCCESS,
    topicList,
    isLoading: false
  }
};

export const getTopics = (filter) => {

  axios.defaults.baseURL = 'http://localhost:8088';
  axios.defaults.headers.common['X-Auth-Token'] = localStorage.getAuthToken();

  return (dispatch) => {
    return axios.get('/v1/topics')
      .then(response => {
        dispatch(getTopicsSuccess({ topicList: response.data }))
      })
      .catch(error => {
        throw(error);
      });
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

  axios.defaults.baseURL = 'http://localhost:8088';
  axios.defaults.headers.common['X-Auth-Token'] = localStorage.getAuthToken();

  return (dispatch) => {
    return axios.get('/v1/topics/' + topicId)
      .then(response => {
        dispatch(getTopicDetailSuccess({ topic: response.data }))
      })
      .catch(error => {
        throw(error);
      });
  };

};