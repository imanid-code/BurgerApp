//import to mysql connection 
const connection = require("../config/connection.js");

// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
    const arrayQuestionMark = [];

    for (let i = 0; i < num; i++) {
        arrayQuestionMark.push('?');
    }
    return arrayQuestionMark.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const keyArray = [];

    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];

        //Check to skip hidden properties 
        if (Object.hasOwnProperty.call(ob, key)) {
            //If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;

            }

            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]

            keyArray.push(`${key}=${value}`);
        }
    }

    //Translate array of strings to a single comma-seperated string 
    return keyArray.toString();
};


//object for all sql statment function , define funciton here and provoke/call function in controller file 
const orm = {

    selectAll(tableInput, callback) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) { throw err; }
            callback(result);
        }
        )
    },


    insertOne(table, cols, vals, callback) {
        let queryString = `INSERT INTO ${table}`;

        queryString += '(';
        queryString += cols.toString();
        queryString += ')';
        queryString += ' VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString)
        connection.query(queryString, vals, (err, result) => {
            if (err) { throw err; }
            callback(result);
        });

    },
    // An example of objColVals would be {name: panther, sleepy: true}

    updateOne(table, objColVals, condition, callback) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) { throw err; }
            callback(result);
        });


    },



        delete (tableName, id, callback) {
            let queryString = "DELETE FROM ?? WHERE ID = ?";
            console.log(queryString);

            connection.query(queryString, [tableName, id], function (err, res) {


                if (err) throw err;
                
                    callback(res);
                
            });
        }
    };



    //export orm object for model (burger.js)
module.exports = orm;