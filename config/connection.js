const mysql = require('mysql');

let connection;

if(process.env.JAWSBD_URL){
    const connection = mysql.createConnection(process.env.JAWSBD_URL)
  }  else {
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'burgers_db',
});
};
//makes connection
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);

});

//exported for ORM to use 
module.exports = connection;