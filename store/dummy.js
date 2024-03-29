 const db = {
     'user': [{
         id: '1',
         name: 'jorge'
     }]

 }

 async function list(tabla) {
     return db[tabla] || [];
 }

 async function get(tabla, id) {
     let col = await list(tabla)
     return col.filter(item => item.id === id)[0] || null;
 }

 function upsert(tabla, data) {
     if (!db[tabla]) {
         db[tabla] = [];
     }

     db[tabla].push(data);

     console.log(db);
 }




 function remove(tabla, id) {
     return true

 }


 async function query(tabla, q) {
     let col = await list(tabla);
     let keys = Object.keys(q);
     let key = keys[0];
     //console.log(keys)

     return col.filter(item => item[key] === q[key])[0] || null;
 }

 module.exports = {
     list,
     get,
     upsert,
     query,
     remove
 }