/**
 * Created by weimin on 16-10-31.
 */
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234567",
    database:"mytest"
})

var table = "student";
var queryStr = "SELECT * FROM "+table;
connection.query(queryStr,function(err,rows,fields){
    if (err){
        console.error(err)
    }else{
        rows.forEach(function(item,i){
            console.log(item.name)
        })
    }
})

connection.end();
