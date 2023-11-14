const { nanoid } = require('nanoid')
const auth = require('../auth')

const TABLA = 'user'


module.exports = function(injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = store = require('../../../store/dummy')
    }

    function list() {
        return store.list(TABLA)

    }

    async function get(id) {
        store.get(TABLA, id)
    }


    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username,

        };

        if (body.id) {
            body.id = user.id
        } else {
            user.id = nanoid()
        };

        if (body.password || body.usarname) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password


            })
        }

        return store.upsert(TABLA, user)

    }

    function follow(from, to) {
        return store.upsert(TABLA + '_follow', {
            user_from: from,
            user_to: to

        });

    };

    async function following(user) {
        const join = {};
        join[TABLA] = 'user_to' //{ user: user_to }
        const query = { user_from: user };
        return await store.query(TABLA + '_follow', query, join);
    }



    return {
        list,
        get,
        upsert,
        follow,
        following
    }
}