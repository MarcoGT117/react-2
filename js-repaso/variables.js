// Cuando se declara una variable con var, esta es elevada al principio del codigo, pero su valor le es asignado hasta cuando se especifica en el codigo, por lo que si se realiza alguna operacion antes de la declaracion se le tratara como undefined, esto se conoce como hoisting

// console.log(variable1); -> undefined
var variable1 = 'varaible var';
// console.log(variable1); -> varaible var

// Similar a var, pero la diferencia esta en que en let no hay hoisting, por lo que si se usa la variable antes de inicializarla en lugar de recibir un undefined se arrojara un error

// console.log(variable2); -> error
let varaible2 = 'varaible let';
// console.log(variable2); -> varaible let

// Similar a let, pero al ser una constante no se podra reasignar un valor a este
// console.log(constante1);  -> error
const constante1 = 'constante const';
// console.log(constante1); -> constante const