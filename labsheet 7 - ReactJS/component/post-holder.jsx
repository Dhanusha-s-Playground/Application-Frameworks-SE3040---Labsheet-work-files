import React, { Component } from "react";
import PostsList from "./post-list";
import AddPost from "./add-post";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    name: "React",
    description: "Best UI library",
  },
  {
    id: 2,
    name: "Node",
    description: "Server side JS",
  },
];

export default class PostHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Router>
            <Switch>
              <Route exact path="/">
                <PostsList posts={posts} />
              </Route>
              <Route path="/add">
                <AddPost save={this.addNewPost} />
              </Route>
            </Switch>
          </Router>
        </div>
        <br />
      </div>
    );
  }

  addNewPost({ name, description }) {
    posts.push({ id: posts.length + 1, name, description });
  }
}
