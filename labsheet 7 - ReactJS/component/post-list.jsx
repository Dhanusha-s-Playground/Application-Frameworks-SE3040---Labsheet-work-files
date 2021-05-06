import React from "react";
import { PostListItem } from "./post-list-item";
import { Post } from "./post";
import { Link } from "react-router-dom";

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
  }

  selectPost(post) {
    this.setState({ post: post });
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <div>
          <Link to="/add">Go to Add</Link>
        </div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Description</td>
              <td>Option</td>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <PostListItem
                  key={post.id.toString()}
                  post={post}
                  selectPost={(post) => this.selectPost(post)}
                />
              );
            })}
          </tbody>
        </table>
        <div>{this.state.post ? <Post post={this.state.post} /> : ""}</div>
      </div>
    );
  }
}
