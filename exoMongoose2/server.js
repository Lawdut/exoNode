
const mongoose = require('mongoose');

const express = require('express');
const app = express();
const port = 8070;
const Schema = mongoose.Schema;

const db = mongoose.connect('mongodb://localhost/recettes').catch(error =>handle(error))
console.log("Connection à mongodb , base de données users");

// Déclaration des schémas
const IngredientSchema = new Schema( {ingr_name : String } );

const RecetteSchema = new Schema ({
    name: String,
    pays : String,
    duree: Number,
    ingredients: [ {type : Schema.Types.ObjectId , ref : 'Ingredient'}] });


// Création des modèles à partir des schémas

mongoose.model('Ingredient', IngredientSchema);
mongoose.model('Recette', RecetteSchema);

const Recette = mongoose.model('Recette');
const Ingredient = mongoose.model('Ingredient');

const ingredient = new Ingredient ({ ingr_name : "carottes"});
const recette = new Recette({});

ingredient.save(function(err){
    recette.name = 'couscous',
    recette.pays = 'Marcoc',
    recette.duree = 30,
    recette.ingredients.push(ingredient._id);

    const ingredient2 = new Ingredient ({ingr_name: "semoule"});
    ingredient2.save(function(err){
        recette.ingredients.push(ingredient2._id);
        recette.save(); //sauvegarde dans mongoDB
    })

});

app.get('/recette/:recette', function(req, res){
    Recette.find({"name": req.params.recette}).populate('ingredients').exec( (err,results) => {
        res.json(results);
    })
})

app.listen (port, () => {
    console.log('le serveur tourne sur le port '+port)
})