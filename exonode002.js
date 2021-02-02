// créer un fichier input.txt
// avec des données

var fs = require("fs"); //fs (file system) contient les fonctions qui permettent de lire-écrire... les fichiers sur le HDD

var data = fs.readFileSync('input.txt');

console.log(data.toString() );

console.log("fin du programme");

//voir la différence avec le 003