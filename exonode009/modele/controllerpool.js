const conn = require('./mysqlconfig.js');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

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

exports.connexion = function(table, data, callback) {
    var sql = " SELECT * FROM " +table+" WHERE nom = "+"'"+data.nom+"'" ;
    console.log(sql);
    conn.query(sql,function(error, rows) {
        if (error) {
            console.log(error);
        }
        console.log(rows[0]);
        callback(rows[0]);
        })
}

exports.enregistrer = function(table, user, callback) {
    hash = bcrypt.hashSync(user.mdp, salt);
    var sql = "INSERT INTO "+ table + "(`id`, `nom`, `mdp`) VALUES(NULL,'"+user.nom+"','"+hash+"');";
    conn.query(sql, function(error) {
        if( error ) {console.log(error);
        }
        callback();
    })
}
