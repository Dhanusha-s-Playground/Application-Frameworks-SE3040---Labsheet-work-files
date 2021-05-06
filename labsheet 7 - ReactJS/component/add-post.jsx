import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { save } = this.props;
    return (
      <div>
        <div>
          <Link to="/">Go to POSTS</Link>
        </div>
        <br />
        <form>
          <div>
            <label htmlFor="name">Name:&nbsp;</label>
            <input
              id="name"
              name="name"
              value={this.state.name}
              onChange={(event) => this.onChange(event)}
              type="text"
            />
          </div>

          <div>
            <label htmlFor="description">Description:&nbsp;</label>
            <input
              id="description"
              name="description"
              value={this.state.description}
              onChange={(event) => this.onChange(event)}
              type="text"
            />
          </div>
          <div>
            <button
              id="btnAdd"
              name="btnAdd"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                save({
                  name: this.state.name,
                  description: this.state.description,
                });
                this.state = {
                  name: "",
                  description: "",
                };
              }}
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    );
  }
}
