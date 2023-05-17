const rest = (a, ...args)=>{
    console.log(a);
    console.log(args);
}

rest(1, 2, 3); // ->  1 [2, 3]

// Destructuring
const obj ={
    a:1, b:2, c:3, d:4
}

const { a, b, ...restobj } = obj;
console.log(a, b, restobj); // -> 1 2 { c: 3, d: 4 }

const arr = [1, 2, 3, 4, 5];

const [el1, el2, ...elArr] = arr;
console.log(el1, el2, elArr); //1 2 [ 3, 4, 5 ]

const useState = () => ['valor',  ()=> {}]

const [valor, setValor] = useState();
console.log(valor, setValor); //-> valor [Function (anonymous)]