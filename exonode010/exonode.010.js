var express = require('express');
var app = express();
var session = require('express-session');
var bcrypt = require('bcryptjs');

app.use (express.urlencoded({ extended:true}))

var users = [];

app.set('views engine', 'ejs');
app.set('views','./mesvues');

var mysqlStore = require('express-mysql-session') (session)

var options = {
    host:"localhost",
    port : 3306,
    user : "root",
    password : '',
    database: 'session_test'
}

var sessionStore = new mysqlStore(options);

//middleware d'utilisation des données des sessions

app.use(session({
    secret: "du sel pour le hash",
    store: sessionStore,
    proxy: true,
    resave: true,

}))