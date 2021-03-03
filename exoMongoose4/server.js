const mongoose = require('mongoose');

const express = require('express');

const app = express();
const port = 8060;

const db = mongoose.connect('mongodb://localhost/')

zpp.use(express.json());
app.use(express.urlencoded({extended : true}))

var recette = require('./controller/recette_controller');

app.get('/recette/get', recette.getRecette);
app.get('recette/getOne/:id', recette.getOne);
app.post('/recette/post',recette.createRecette);
app.post('/recette/put', recette.updateRecette);
app.get('/recette/liste/:searchText', recette.searchRecette);

app.listen(port, () => {
    console.log('le serveur fonctionne sur le port '+ port);
})
