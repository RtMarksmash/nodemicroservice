const auth = require('../../../auth/')
const TABLA = 'auth';


module.exports = function(injectedStore) {
    let store = injectedStore;

    if (!store) {
        store = store = require('../../../store/dummy');
    }

    async function login(username, password) {
        const data = await store.query(TABLA, { username: username });
        
        if (data.password === password) {
            //generar token
            return auth.sign(data);
        } else {
            throw new Error('informacion invalida')
        }

    }


    function upsert(data) {
        const authData = {
            id: data.id
        }


        if (data.user) {
            authData.user = data.user;
        }

        if (data.password) {
            authData.password = data.password;
        }

        return store.upsert(TABLA, data)
    }

    return {
        login,
        upsert,
    }

} 

