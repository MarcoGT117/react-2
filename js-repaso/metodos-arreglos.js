const arr = [0, 1, 2, 3 , 4]

// Filter toma los valores de un arreglo y devuelve en un arreglo con los elementos cuyos valores se evaluen como true dependiendoi de la condicion
const r = arr.filter(el => el > 2);

console.log(r); // ->  [ 3, 4 ]

// Map aplica una funcion a cada elemento y regresa un arreglo que ya fue procesado por la funcion
const mapped = arr.map(el => el * 2)
console.log(mapped);

const users = [
    {id: 1, name: 'Marco'},
    {id: 2, name: 'Jose'},
    {id: 3, name: 'Juan'},
    {id: 4, name: 'Rosa'}
]

const usersMapped = users.map(user => `Usuario: ${user.id}, nombre: ${user.name}`);
console.log(usersMapped);

// Reduce
const getMax = (a,b) => Math.max(a, b);
const r1 = arr.reduce(getMax, 0);
console.log(r1);
const r2 = users.reduce((acc, el)=> 
    `${acc === '' ? '' : `${acc}, `}${el.name}`, ''
);
console.log(r2);

const r3 = users.reduce((acc, el) => {
    if(el.id < 2) return acc
    return acc.concat(el)
}, []);
console.log(r3);