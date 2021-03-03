const connection = require ("../config/connection.js");

const orm = {
    selectAll(tableName, callback){
    //?? double ? is for table or column names
    connection.query("SELECT * FROM ??", [tableName], (err, result) => {
        if (err) throw err;
        if (typeof callback === 'function'){
            callback(result);
        }
    });
},

insertOne(tableName, nameColumn, nameValue, devoredColumn, callback){
    connection.query( "INSERT INTO ??",  [tableName,nameColumn,nameValue,devoredColumn] , (err, result) => {
        if (err) throw err;
        if (typeof callback === 'function'){
            callback(result);
    }
})


updateOne(tableName, nameColumn, nameValue, devoredColumn, callback);{
    connection.query( "UPDATE ??",  [tableName,nameColumn,nameValue,devoredColumn] , (err, result) => {
        if (err) throw err;
        if (typeof callback === 'function'){
            callback(result);
    }
})
}



delete(tableName, id, callback);{
    connection.query("DELETE FROM ?? WHERE ID = ?", [tableName,id] , (err,result) => {
        if (err) throw err;
        if (typeof callback === 'function'){
            callback(result);
    } 
    })
}
}}

module.exports = orm;