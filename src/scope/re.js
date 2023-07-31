var firstName;  //Cuando se declara esta variable se le asigna un valor Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David';     // declarar/asignar
lastName = "Ana";           // reasignar
console.log(lastName);

var secondName = "David";   // declarando/asignando
var secondName = "Ana";     // reasignando
console.log(secondName);

// Let

let fruit = 'Apple';        //  declarar y asignar
fruit = "Kiwi";             //  reasignar valor

console.log(fruit);

//let fruit = "Banana";       // con let no puedo redeclarar, si puedo reasignar (cambiar el valor)
console.log(fruit);

//Const 

const animal = 'dog';           // declara y asigna
//animal = 'cat';               // no puedo reasignar con const
//const animal = 'snake';         // no puedo redeclarar
console.log(animal);

const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
