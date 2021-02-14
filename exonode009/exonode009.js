//chargement des modules

const express = require('express'); //=> consulter le site EXPRESS
const app = express();
const cors = require('cors');

const fs = require('fs');


const ejs = require('ejs'); //template ejs; il en existe plein d'autres. L'extension du fichier doit être .ejs et doit être du format html.

const jsonfile = require('jsonfile');

const bdd = require('./modele/controllerpool.js')

app.use(cors());

app.use(express.json());

app.use(function(req, res, next) {
    console.log('une requête a été effectué a cette heure', Date.now());
    next();
});

app.use(express.urlencoded({ extented :true})); //permet de traiter les URL entrantes --- pour accepter les form


app.set('views', __dirname +'/mesvues'); //indique le dossier où se trouvent mes vues

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

//lancement avec un objet en paramètre
app.get('/about', function(req, res) {
    res.render('about', { info : "une information"});
});

// Appel get avec des paramètres
//si l'url est http://localhost:8081/datas2/p1/p2 (template mesvues/datas2.ejs)
//récupération des paramètres données en entrée
//Ca correspond a ne requête nirmale comme http://localhost:8081/datas1?param1=p1&parm2=p2
//récupéré par le get aunsu :param1/:param2
// puis transformation du même template avec comme données ces mêmes paramètres

app.get('/datas2/:param1/:param2', function(req, res) {
    console.log(req.params);
    res.render('datas2', {result1 : req.params.param1 , result2 : req.params.param2} );
});

app.get('/datas2', function (req, res) {
    let donnees=jsonfile.readFileSync('modele/datas.json');
    res.render('datas2', donnees)
});

//appel de bdd.getAll sur la table article pour récupérer tous les Articles

app.get('/datas4', function (req, res) { //voir la fonction CallBack dans controllerpool.js
    bdd.getAll("articles", function (article) {
        res.render('datas4', {articles : article});
    })
});

//création d'un formulaire sur 1 seul article
app.get('/form_article', function(req,res) {
    res.render('form', { titre : "articles" });
});

app.post('/add_article', function (req, res){
    bdd.create('articles', req.body, function(){
        res.redirect('/datas4')
    })
});

//fonction de modification d'un article
app.get('/afficheOne/:id', function (req,res){
        res.render('afficheOne', {id : req.params.id});
})

app.post('/modif/:id', function (req,res){
    bdd.modif('articles',req.params.id, req.body, function(){
        res.redirect('/datas4')
    })
})

app.get('/datajson', function (req,res) {
    bdd.getAll('articles', function(articles) {
        res.json({ articles: articles});
    })
})
app.listen(8081);
console.log('le serveur écoute le port : 8081');