const connection = require ("../config/connection.js");

const orm = {
    selectAll(burgers, callback){
    //?? double ? is for table or column names
    connection.query("SELECT * FROM ??", [burgers], (err, result) => {
        if (err) throw err;
        if (typeof callback === 'function'){
            callback(result);
        }
    });
},

insertOne(burgers, burger_name, devoured, callback){
    connection.query( "INSERT INTO ??",  [burgers] , (err, result) => {
        if (err) throw err;
        if (typeof callback === 'function'){
            callback(result);
    }
})


updateOne(burgers, burger_name, devoured, callback);{
    connection.query( "UPDATE ??",  [burgers] , (err, result) => {
        if (err) throw err;
        if (typeof callback === 'function'){
            callback(result);
    }
})
}



delete(burgers, burger_name, devoured, callback);{
    connection.query("DELETE FROM ?? WHERE ID = ?", [burgers, burger.id] , (err,result) => {
        if (err) throw err;
        if (typeof callback === 'function'){
            callback(result);
    } 
    })
}
}}
