const express = require('express');
const app = express();

app.use(express.urlencoded({
    extented: true
}));

app.get('/', function(req, res) {
    console.log(req.body);
    res.send('slash');
});

app.get('/about', function(req, res) {
    console.log(req.body);
    res.send('about');
});

app.listen(8081, function() {
    console.log ('le serveur écoute le port:8081')


    //consulter le site https://expressjs.com/fr/ !
})