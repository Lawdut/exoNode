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

exports.create = function(table , article, callback) {
    var sql = "INSERT INTO "+ table + " VALUES(NULL,'"+article.nom+"','"+article.description+"','"+article.quantite+"');";
    console.log(sql);
    conn.query(sql,function(error){
        if( error ) {console.log(error);
        }
        callback();
    })
}



exports.modif = function(table, id , article, callback) {
    var sql = "UPDATE "+ table + " set nom ='"+article.nom+"', description = '"+article.description+"', quantite = '"+article.quantite+"' WHERE id ='"+id+"';";
    console.log(sql);
    conn.query(sql,function(error){
        if( error ) {console.log(error);}
        callback();
    })
}