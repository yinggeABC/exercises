/**
 * Created by weimin on 16-10-31.
 */
var mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234567",
    database:"mytest",
    connectionLimit:10
})

pool.getConnection(function(err,connection){
    connection.query("select * from grade",function(err,rows,fields){
        if (err) throw err;
        else console.log(rows);
        connection.release();
        pool.end();
    })
})


