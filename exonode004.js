// node est un gestionnaire d'évènements

var events = require('events');

//création d'un emetteur d'évènement

var eventEmitter = new events.EventEmitter(); 
//On crée l'objet eventEmitter

eventEmitter.on('EvenementDramatique', function() {console.log("DRAME !!!")});
//Adds a listener at the end of the listeners array for the specified event. No checks are made to see if the listener has already been added. 
//Multiple calls passing the same combination of event and listener will result in the listener being added multiple times. Returns emitter, so calls can be chained.

eventEmitter.emit('EvenementDramatique'); 
//Execute each of the listeners in order with the supplied arguments. Returns true if the event had listeners, false otherwise.