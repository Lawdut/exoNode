function hello () {return "hello"};
console.log(hello());

let hello2 = async function () {return "Hello 2" }
console.log(hello2());

let hello3 = async function () { return "Hello 3"};
// async retourne une promesse, on peut utiliser then
hello3().then((value) => console.log(value))

let hello4 = async function() {return "Hello 4"}
hello4().then(console.log)