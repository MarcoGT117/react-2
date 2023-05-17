/* 
// Expresion de clase
const Rectangulo = class R{

} */

// Declaracion de clase, las calses declaradas con class no tienen hoisting
class Rectangulo {
    propiedad = 'una propiedad';
    // Propiedad privada
    #horizontal;
    // Propiedad estatica
    static centimetros = 12;

    constructor(color = 'rojo', horizontal = true){
        this.color = color;
        this.#horizontal = horizontal;
    }
    // Metodo
    getInfo(){
        console.log(`El rectangulo es de color ${this.color} con una orientacion ${this.#horizontal ? 'horizontal' : 'vertical'}`);
    }
    // Metodo estatico
    static crecer(){
        console.log(`Creciendo ${this.centimetros} cm`);
    }
}
/* 
function Cuadrado(){

} */
const negro = new Rectangulo('negro', false);
negro.getInfo();
console.log(negro); //No mostrara la propiedad privada
//console.log(negro.#hambre); //Error
const porDefecto = new Rectangulo();
porDefecto.getInfo();

Rectangulo.crecer();