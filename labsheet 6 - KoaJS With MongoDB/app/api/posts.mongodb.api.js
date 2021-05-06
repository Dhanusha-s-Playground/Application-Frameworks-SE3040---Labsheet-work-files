const uuid = require('uuid');

const {getAll, getById, removeById, save, update} = require('../dal/post-dao-impl');


/** creates a posts. */
const createPost = async ({name, description}) => {
    const post = {
        id: uuid.v4(),
        name,
        description,
        postedDate: new Date()
    }

    return await save(post); // TODO: return success or failure
};

/** get post by id. */
const getPost = async (id) => {
    return await getById(id);
};

/** get all the posts. */
const getPosts = async () => {
    return await getAll();
};

/** update the post. */
const updatePost = async (id, {name, description, postedDate}) => {
    return await update(id, {name, description, postedDate});
};

/** delete the post by id. */
const deletePost = async (id) => {
    return await removeById(id);
};

module.exports = {
    createPost,
    getPost,
    getPosts,
    updatePost,
    deletePost
}
