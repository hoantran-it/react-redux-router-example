import {userAction} from "actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case userAction.AUTHENTICATE_SUCCESS:
      return action.userInfo;
    default:
      return state;
  }
};
