const express = require('express');
const cors = require('cors');
const app = express();
const port = 8050;

app.use(cors());
app.use(express.json());

app.get('/tomy', function (req,res){
    res.json({nom :"tomy", age : 5});
});

app.listen(port, () => {
    console.log('le serveur fonctionne sur le port : '+port);
})