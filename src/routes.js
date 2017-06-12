import React from "react";
import {Route, IndexRoute} from "react-router";
import Main from "components/Main";
import Home from "pages/HomePage";
import SignUp from "pages/SignUpPage";
import Login from "pages/LoginPage";
import CreateTopic from "pages/CreateTopicPage";
import Topic from "pages/TopicPage";
import TopicDetail from "pages/TopicDetailPage";
import UserInfo from "pages/UserDetailPage";

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/sign-up" component={SignUp}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/create-topic" component={CreateTopic}></Route>
    <Route path="/topic" component={Topic}></Route>
    <Route path="/topic-detail/:topicId?" component={TopicDetail}></Route>
    <Route path="/user-detail" component={UserInfo}></Route>
  </Route>
)
