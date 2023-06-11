let db = {
    'user': [{
        "name": "jorge",
        "id": 13
    }]

}

 async function list(tabla){
    return db[tabla];
}

async function get(tabla,id){
    let col = await list(tabla)
    return col.filter( item => item.id === id);
}

function upsert(tabla,data){
    db[collection].push(db);
}

function remove(tabla,id){
    return true

}

module.exports = {
    list,
    get,
    upsert,
    remove
}