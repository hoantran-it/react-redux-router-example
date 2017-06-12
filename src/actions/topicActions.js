import axios from "axios";

import {topicAction} from "./actionTypes";


export const fetchTopicsSuccess = (topicList) => {
  return {
    type: topicAction.FETCH_TOPICS_SUCCESS,
    topicList
  }
};

export const fetchTopics = (filter) => {

  axios.defaults.baseURL = 'http://localhost:8088';
  axios.defaults.headers.common['X-Auth-Token'] = "8875208a-a5ff-48c2-88b0-d08878e2fa31";

  return (dispatch) => {
    return axios.get('/v1/topics')
      .then(response => {
        dispatch(fetchTopicsSuccess({ topicList: response.data }))
      })
      .catch(error => {
        throw(error);
      });
  };

};