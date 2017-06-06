import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from 'components/Main'
import Home from 'pages/HomePage'
import SignUp from 'pages/SignUpPage'
import Login from 'pages/LoginPage'
import CreateTopic from 'pages/CreateTopicPage'
import Book from 'components/book/BookPage'

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/sign-up" component={SignUp}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/create-topic" component={CreateTopic}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/book" component={Book}></Route>
  </Route>
)
