const mongoose = require("mongoose");
const express = require("express");
//regroupement de tous les modèles en une seule variables ainsi on utilise toujours db.modele pour accéder aux produits et reviews
//à tester avec postman

var db = require("./models");
const { create } = require("./models/review");
console.log("DB=>".db);

mongoose.connect("mongodb://localhost/magasin", {useNewUrlParser: true, useUnifiedTopology : true});

var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

//routes

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+ "/public/index.html"))
});

//affichage des produits
app.get('/products', function(req,res){
    db.Product.find({})
    .then(function(dbProducts){
        console.log(dbProducts)
        res.json(err);
    })
});

//création d'un produit
//tester avec postman

app.post("/product", function(req, res){
    db.Product.create(req.body)
    .then(function(dbProduct){
        res.json(dbProduct);
    })
})

//le produit existe deja tester avec postman en récupérant l'id d'un produit existant

app.post("/product/:id", function(req, res) {
    db.Review.create(req.body)
    .then(function(dbReview) {
        //si la review est créée avecsuccès retrouver le produit et exécuté cette fonction mongoose
        //new true indique qu'on veut récupérer le nouveau produit créé
        //on peut chaïner sur then qui renvoit le produit modifié

        return db.Product.findOneAndUpdate({_id:req.params.id}, {$push: {reviews:dbReview._id}}, { new:true })
        })
        .then(function(dbProduct){
            res.json(dbProduct);
        })
        .catch(function(err){
            res.json(err)
        })
    })

app.listen(8095)