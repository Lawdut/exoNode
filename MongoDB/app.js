const express = require ('express');
const mongoClient = require ('mongodb').MongoClient;
const cors = require('cors');

const app = express();

const url = 'mongodb://localhost:27017'

const dbName = 'dwwm';
let db;

mongoClient.connect(url, function(error, client){
    db = client.db(dbName);
});

//MIDDLEWARE
app.use(express.json());
app.use(cors());

app.get('/', function(req, res){
    res.send('<a href="animaux">Liste animaux</a>')
});

app.get('/animaux', function(req, res){
    db.collection('animaux').find({}).toArray(function (err, docs){
        res.json(docs)
    })
})

app.get('/animaux/:name', function(req,res){
    console.log(req.params.name)
    db.collection('animaux').find({name : req.params.name}).toArray(function (err, docs){
        res.json(docs)
    })
})


app.post('/insertAnimal', function(req,res) {
    console.log(req.body);
    db.collection('animaux').insertOne(req.body)
    res.json({res : "Well done guy"})
        
})


app.listen(8095)
console.log('démarré sur port 8095')