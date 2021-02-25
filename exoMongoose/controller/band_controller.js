var mongoose = require('mongoose');
var Band = mongoose.model('Band');

// LISTE DE TOUS LES GROUPES (commandes mongoose avec les même critères de sélection que mongodb) 
exports.getBands = function(req, res) {     
    Band.find({})     
    .exec(function(err, bands) {     
        if (!bands){       
            res.json(404, {msg: 'band(s) Not Found.'});
        } else {       
            res.json(bands);     
        }   
    }); 
} 

    // RECHERCHE find avec $text -> $search
        
exports.searchBands = function(req, res) {
        Band.find({
             $text: { 
                $search: req.params.searchText, $diacriticSensitive: false, $caseSensitive: false},
             
            
        })
        .exec(function(err, bands) {       
            console.log("Search ",bands)     
                      
        if (!bands){       
            res.json(404, {msg: 'band(s) Not Found.'});
        } else {
            res.json(bands);
        }
    });
} 

exports.getOne = function(req, res) {
    console.log("controller/band_controller.js: getOne",req.params)
        Band.findById(req.params.id)     
        .exec(function(err, band) {           
            console.log("THE ONE BAND",band)     
            if (!band){       
                res.json(404, {msg: 'band(s) Not Found.'});
            } else {
                res.json(band);
            }   
        }); 
} 

exports.createBand = function(req,res) {
       // console.log(req.body);
        var band = new Band({
            name:req.body.name,
            city:req.body.city, 
            members:req.body.members,                             
            albums:req.body.albums,
        })    
        band.save(function (err) {
            if (err) {console.log(err)};
                res.json(band)   
            }); 
        } 
exports.updateBand = function(req,res) {
    Band.update( { _id: req.body._id },
        { 
            $set:{
            name:req.body.name,                       
            city:req.body.city,
            members:req.body.members,
            albums:req.body.albums,
            }
        }     
    )     
            .exec (function(err,results){
                if (err || results < 1) {
                    res.json(404, {msg: 'Failed to update band.'});
                    } else {
                        res.json({msg: "Band Updated"});
                    }
                })
            }   