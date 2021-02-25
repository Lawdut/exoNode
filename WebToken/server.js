const dotenv = require('dotenv'); // npm i dotenv 
dotenv.config();
const path = require('path');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
var mongoose = require('mongoose');
require('./models/user.js');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs'); //
var cors = require('cors'); //

app.use(cors());

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

var db = mongoose.connect('mongodb://localhost/afpauser');

function authenticateToken(req, res, next) {

    const token = req.headers['x-access-token'];

    if (token == null) return res.sendStatus(401);


    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {

    if (err) return res.sendStatus(403);

    req.user = user;

    next();

    })

}

// Generation du TOKEN//
/*en lisant la clé privée sous .env
la clé est créée par => require('crypto').randomBytest(64).toString('hec');
sous le shell node
//créer un fichier .env et ajouter TOKEN_SECRET = le Token */

function generateAcessToken(user) {
    //expire après 5 min
    return jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: '5mn'});
}

app.post('/user/signup', (req, res) => {
    User.findOne ({ email : req.body.email })
    .exec ((err, user) => {
        if (err) {
            res.status(400).send({message: "Failed ! Email is already in use!"});
        }else {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcryot.hashSync(req.body.password, salt);
            var user = new User ({
                name : req.body.name,
                password : hash,
                email: req.body.email
            });
            user.save(function(err) {
                if (err) return handleError(err);
                const token = generateAcessToken({user:req.body})
                res.status(200).send(token);
            })
        }
    })//end exec
})//end post

//test du token
app.get('/api/userOrders', authenticateToken, function (req, res) {
    console.log("OK TU PASSES !!");
    res.render('ok');
})

app.listen(8092);
console.log('8092');