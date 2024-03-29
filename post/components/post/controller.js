const nanoid = require('nanoid')
const error = require('../../../utils/error')


const COLLECTION = 'post';

module.exports = function(injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list(query) {
        return store.list(COLLECTION);
    };


    async function get(id) {
        const user = await store.get(COLLECTION, id)
        if (!user) {
            throw error('post didnt find', 404)
        }
        return user;
    };

    async function upsert(data, user) {
        const post = {
            id: data.id,
            user: user,
            text: data.text
        };

        if (!post.id) {
            post.id = nanoid()
        }

        return store.upsert(COLLECTION, post).then(() => post)
    }

    async function like(post, user) {
        const like = store.upsert(COLLECTION + '_like', {
            post: post,
            user: user
        });

        return like;
    };


    async function postsLiked(user) {
        const users = await Store.query(COLLECTION + '_like', { user: user }, { post: post });
        return users;
    };

    async function postLikers(post) {
        const users = await Store.query(COLLECTION + '_like', { post: post }, { post: post });
        return users;
    };



    return {
        list,
        get,
        upsert,
        like,
        postsLiked,
        postLikers
    };
}