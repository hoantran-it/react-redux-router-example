import axios from "axios";
import {commentAction} from "actions/actionTypes";
import localStorage from "utils/LocalStorage";

export const getCommentsSuccess = (commentList) => {
  return {
    type: commentAction.GET_COMMENTS_SUCCESS,
    commentList,
    isLoading: false
  }
};

export const getComments = (topicId) => {
  axios.defaults.baseURL = 'http://localhost:8088';
  axios.defaults.headers.common['X-Auth-Token'] = localStorage.getAuthToken();

  return (dispatch) => {
    return axios.get('/v1/topics/' + topicId + '/comments')
      .then(response => {
        dispatch(getCommentsSuccess({ commentList: response.data }))
      })
      .catch(error => {
        throw(error);
      });
  };

};

export const getCommentDetailSuccess = (topic) => {
  return {
    type: commentAction.GET_COMMENT_DETAIL_SUCCESS,
    topic,
    isLoading: false
  }
};

export const getCommentDetail = (topicId) => {

  axios.defaults.baseURL = 'http://localhost:8088';
  axios.defaults.headers.common['X-Auth-Token'] = localStorage.getAuthToken();

  return (dispatch) => {
    return axios.get('/v1/topics/' + topicId)
      .then(response => {
        dispatch(getCommentDetailSuccess({ topic: response.data }))
      })
      .catch(error => {
        throw(error);
      });
  };

};