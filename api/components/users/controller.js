const nanoid = require('nanoid')

const TABLA = 'user'


module.exports = function(injectedStore) {
    let store = injectedStore;

    if (!store) {
        store = store = require('../../../store/dummy')
    }

    function list() {
        return store.list(TABLA)

    }

    function get(id) {
        return store.get(TABLA, id)
    }


    function upsert() {
        const user = {
            name: body.name
        };

        if (body.id) {
            body.id = user.id
        } else {
            user.id = nanoid()
        };

        return store.upsert(TABLA, user)



    }

    return {
        list,
        get,
        upsert
    }
}