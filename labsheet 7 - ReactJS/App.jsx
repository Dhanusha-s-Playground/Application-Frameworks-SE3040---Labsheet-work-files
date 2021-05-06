import React from "react";
import PostHolder from "./component/post-holder";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPost from "./component/add-post";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PostHolder />;
  }
}
