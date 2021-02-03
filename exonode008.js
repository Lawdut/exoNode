const express = require('express');
const app = express();

app.use(express.urlencoded({
    extented: true
}));

app.get('/', function(req, res) {
    console.log(req);
    res.send('slash');
});

app.get('/about', function(req, res) {
    console.log(req.params);
    res.send('about');
});

app.get('/animal/:id', function(req, res) {  //":id" syntaxe pour paramètre
    console.log(req.params);
    //res.send('<h1>animal' + req.params.id + '</h1>');
    res.send(`<h1>animal : ${req.params.id} </h1>`); //attention, il faut OBLIGATOIREMENT mettre entre back accolade
});

app.listen(8081, function() {
    console.log ('le serveur écoute le port:8081')


    //consulter le site https://expressjs.com/fr/ !
})