const mongoose = require ('mongoose');
const Recette = mongoose.model('Recette');

exports.getRecette = function (req, res) {
    Recette.find({})
    .exec(function(err, recettes) {
        if(!recettes){
            res.json(404, {msg: 'recette non trouvée'});
        }else {
            res.json(recettes);
        }
    });
}

//Function de recherche avec find

exports.searchRecette= function (req, res) {
    Recette.find({
        $text: {
            $search: req.params.searchText, $diacriticSensitive: false, $caseSensitive: false},
    })
    .exec(function(err, recettes) {
        console.log("Search", recettes)
        if(!recettes){
            res.json(404, {msg: 'recette non trouvée'});
        }else {
            res.json(recettes);
        }
    });
}

exports.getRecette = function(req, res) {
    console.log("controller/recette_controller.js: getOne", req.params)
    recette.findById(req.params.id)
    .exec(function(err, band){
        console.log("La recette", recette)
        if(!recette){
            res.json(404, {msg: 'recette non trouvée'});
        }else {
            res.json(recette);
        }
    })
}

exports.createRecette = function(req,res) {
    var recette = new Recette({
        
    })
}