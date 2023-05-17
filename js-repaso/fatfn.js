// Declarar una funcion con la palabra reservada function puede servir para ser una funcion o para tener un contexto de this y utilizar herencia basada en proptotipos
function Fn() {
    this.prop = 'propiedad'
    return 'Hola mundo';
}

const func =  Fn();
console.log(func);

const fnInstance = new Fn();
console.log(fnInstance); //Devuelve un objeto literal e ignora lo que escribamos en el return y regresa this


// fat arrow function
// estas funciones no tienen contexto de this
const fatFn = () => {
    return 'Hola mundo';
}

const af1 = fatFn();
console.log(af1); // las arrow function no pueden ser llamadas con la palabra reservada de new, arrojara un error