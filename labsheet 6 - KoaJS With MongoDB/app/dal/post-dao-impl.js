// posts means the collection.
const posts = require('../index').db('posts').collection('posts');

/** save a post. */
const save = async ({id, name, description, postedDate}) => {
    const result = await posts.insertOne({id, name, description, postedDate});

    return result.ops[0];
};

/** get all posts. */
const getAll = async () => {
    const cursor = await posts.find();

    return cursor.toArray();
};

/** get post by id. */
const getById = async (id) => {
    const cursor = await posts.find({id: id});

    return cursor;
};

/** remove post by id. */
const removeById = async (id) => {
    return await posts.deleteOne({id: id});
};

/** update post by id. */
const update = async (id, {name, description, postedDate}) => {
    // const result = await posts.replaceOne({id: id}, {name, description, postedDate});
    const result = await posts.updateOne(
        {id: id},
        {
            $set: {name, description, postedDate}
        }
    );

    return result;
    // return result.ops[0];
};

module.exports = {
    save,
    getAll,
    getById,
    update,
    removeById
};
