const conn = require('./mysqlconfig.js');

exports.getAll = function (table,callback){

    var sql = "SELECT * FROM " + table;
        conn.query(sql,function(error,rows){
            if (error){
                console.log(error);
            }
            callback(rows);
        })
}