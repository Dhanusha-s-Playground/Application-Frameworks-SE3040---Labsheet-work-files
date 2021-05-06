/**
 * MIT License
 *
 * Copyright (c) 2021 Dhanusha Perera
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * @author : Dhanusha Perera
 * @since : 20/03/2021
 */

const posts = require('../data/postData.js');
const Post = require('../entity/post');


/**
 * This method will create a new post by generating a unique ID.
 *
 * @returns if success: created post ID, otherwise null
 */
function createPost(name, description) {
    const createdPost = new Post(name, description);
    posts.set(createdPost.id, createdPost);
    return (posts.has(createdPost.id))? createdPost.id : null;
}

/**
 * This method accepts id and find the posts if there is matching one,
 * if id got matched, that record would be updated, otherwise print and error.
 * name, description : new values to be entered.
 *
 * @returns if success: true, otherwise false.
 * @returns if not found a record to update for given ID: 404
 */
function updatePost(id, name, description) {
    if (posts.has(id)) {
        /* update process */
        posts.set(id, new Post(name, description));
        const updatedPost = posts.get(id);
        return (updatedPost.name == name && updatedPost.description == description);
    } else {
        /* no post found for given id */
        console.error('Error: No post found for the given ID');
        return 404;
    }
}

/**
 * This method accepts id and find the posts if there is matching one,
 * if id got matched, that record would be deleted, otherwise print and error.
 *
 * @returns if success: true, otherwise false.
 */
function deletePost(id) {
    return posts.delete(id);
}


/**
 * This method accepts id and find the post.
 *
 * @param id: id of the post to be returned.
 * @returns if id got matched, that post would be returned, otherwise returns 'undefined'
 */
function getPost(id) {
    return posts.get(id);
}

/**
 * This method get all the posts.
 * @returns all the post.
 */
function getPosts() {
    /* spread operator is used to get all the values from the posts(Map) */
    return [...posts.values()];
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getPosts
}
