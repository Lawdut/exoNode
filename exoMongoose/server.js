require('./controller/models.js');
var mongoose = require('mongoose');

const express = require('express');
const app = express();
const port = 8090;
/*const path = require ('path');
const server = require('http').Server(app);
const bodyParser = require('body-parser');*/

const db = mongoose.connect('mongodb://localhost/musique')

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

var bands = require('./controller/band_controller');

app.get  ('/bands/get' , bands.getBands );
app.get  ('/bands/getOne/:id' , bands.getOne ); 
app.post ('/bands/post', bands.createBand  );              
app.post ('/bands/put'    , bands.updateBand  );            
//app.post ('/bands/delete' , bands.deleteBand  ) ;             
app.get  ('/bands/liste/:searchText',  bands.searchBands );


app.listen(port, () => {
    console.log('le serveur fonctionne sur le port : '+port);
})