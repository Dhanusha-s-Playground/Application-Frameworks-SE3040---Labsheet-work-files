import React from 'react';

export function PostListItem(props) {
    const {post} = props;
    const {selectPost} = props; // I think this is correct.

    return (<tr>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.description}</td>
        <td><a onClick={() => selectPost(post)}>Select</a></td>
    </tr>)
}
