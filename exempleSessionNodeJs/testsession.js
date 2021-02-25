/*------ AFPA 2021 ---------------------------------------------------------------
 Cavarec JB.
 Gestion des sessions
 utilisation du module express-session
 utilisation du module bcrypt pour crypter le mot de passe
 utilisation du module express-mysql-session pour stocker une session dans mysql

 Si la table n'est pas créée , créer la table session dans la base session_test

 CREATE TABLE IF NOT EXISTS `sessions` (
    `session_id` varchar(128) COLLATE utf8mb4_bin NOT NULL,
    `expires` int(11) unsigned NOT NULL,
    `data` mediumtext COLLATE utf8mb4_bin,
    PRIMARY KEY (`session_id`)
  ) ENGINE=InnoDB

  npm init
  npm i express --save
  npm i express-session --save 
  npm i bcryptjs --save 
  npm i express-mysql-session

---------------------------------------------------------------------------------*/
var express = require('express');
var app = express();
var session = require('express-session');
var bcrypt = require('bcryptjs');

// sert à récupérer les éléments du body.
app.use(express.urlencoded({ extended: true }))

var Users = [];

app.set('view engine', 'ejs');
app.set('views','./mesvues');

var mysqlStore = require('express-mysql-session')(session);

var options = {
    host: "localhost",
    port: 3306,
    user : 'root',
    password: '',
    database: 'session_test'
}

var sessionStore = new mysqlStore(options);

app.use(session({
    secret: "du sel pour le hash",
    store: sessionStore,
    proxy: true,
    resave: true,
    saveUninitialized: true 
}));

app.get('/', function(req,res) {
    res.redirect('/signup')
});

app.get('/ok', function(req,res) {
    res.render('ok');
});

app.get('/signup', function(req, res){
    res.render('signup');
 });
 
 app.post('/signup', function(req, res){
    //console.log("body:",req.session );
    if(!req.body.id || !req.body.password) {
       res.status("400");
       res.send("erreur!");
    } else {
       Users.filter(function(user) {
          if(user.id === req.body.id){
             res.render('signup', {
                message: "existe deja" });
          }
       });

       bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password , salt , function(err, hash) {
        // Store hash password in DB
        if (err) { console.log(err) ; res.redirect('/ok');  }
        else { 
            console.log(hash);
            var newUser = { id: req.body.id, password: hash };
            Users.push(newUser);
            req.session.user = newUser;
            console.log(Users);
            res.redirect('/ok'); 
       }
      });
    })
    }
 });

 app.get('/affiche',function(req,res){
        console.log(req.session);
        res.redirect('/ok');
 })

app.listen(8090);
console.log('le serveur écoute sur le port:8090');
