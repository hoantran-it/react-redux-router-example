import {commentAction} from "actions/actionTypes";
import Constants from "utils/Constants";
import {getApi} from "services/restService";


export const getCommentsSuccess = (commentList) => {
  return {
    type: commentAction.GET_COMMENTS_SUCCESS,
    commentList,
    isLoading: false
  }
};

export const getComments = (topicId) => {
  return (dispatch) => {
    getApi((response) => {
      dispatch(getCommentsSuccess({ commentList: response.data }))
    }, `${Constants.REST_API.TOPICS}/${topicId}/comments`, true);
  };
};