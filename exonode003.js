// créer un fichier input.txt
// avec des données

var fs = require("fs");

fs.readFile('input.txt', function(err,data){
    if(err) {console.log(err) }
    console.log(data.toString() );
})

console.log("fin du programme");

//002 : le fichier s'execute dans l'ordre du code
//003 : le fichier execute les fonctions de manière asynchrone. 

//Ces 2 exemples montrent le concept de blocage et non blocage
//le 1er programme (002) se bloque jusqu'à la fin de la lecture alors que le deuxième (003) continue à s'executer sans attendre la fin de la tâche