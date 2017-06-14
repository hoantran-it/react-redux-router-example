import {commentAction} from "actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case commentAction.GET_COMMENTS_SUCCESS:
      return {
        ...action.commentList,
        isLoading: false
      };
    default:
      return state;
  }
};
