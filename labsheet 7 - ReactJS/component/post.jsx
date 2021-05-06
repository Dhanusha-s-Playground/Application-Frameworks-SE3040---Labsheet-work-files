import React from "react";

export class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    // meka mama nikamata haduwe
    componentDidCatch(error, errorInfo) {
    }

    // meka mama nikamata haduwe
    componentDidMount() {
    }

    render() {
        const {post} = this.props;
        return (<div>
            <div>
                <p>ID: {post.id}</p>
            </div>

            <div>
                <p>Name: {post.name}</p>
            </div>

            <div>
                <p>Description: {post.description}</p>
            </div>
        </div>);
    }

}
