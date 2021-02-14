const express = require('express');
const cors = require('cors');
const app = express();
const port = 8088;

app.use(cors());

app.use(express.urlencoded({ extended: false}))
app.use(express.json())



//middleware
app.use(function(req,res,next) {
console.log('un GET a été effectué à cette heure :', Date.now());
next();
});

//traitement de GET
app.get('/', function(req, res){
    res.json({ nom : "Tom", age : 55});
})

app.listen(port,() => {
    console.log('Le serveur fonctionne sur le port:' + port);
}) 

/* dans cette exercice, le serveur apache (voir ajax dans htdocs) récupère les données et les affiches sur une page web. C'est une communication entre deux serveurs.*/