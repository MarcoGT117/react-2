import { useState, Component } from "react";

/* Reglas de los hooks:
  - No se llaman en loops ni condicionales (if, while, foreach, etc.)
  - Idealmente se encuentra en el nivel mas alto de nuestro componenete
  - Solo se llaman en dos lugares: Dentro de componentes de React y en Custom Hooks
  - Recomendacion: Cuando creemos un custom hook se nombran como useNombreDeseado
*/

// Custom hook
const useContador = (inicial) =>{
  // Aqui useState es una funcion que recibe como argumento el valor inicial del contador
  const [contador, setContador] = useState(inicial);

  const incrementar = () =>{
    setContador(contador + 1);
}
return [contador, incrementar]
}  

// El hook useEffect es usado principalmente al momento de hacer llamado a APIs

const App = ()=> {
// Destructuring del hook
const [ contador, incrementar] = useContador(0);
  return(
    <div>
      Contador : {contador}  
      <button onClick={incrementar} > {/* Intente usar el operador ++, pero al ser contador un const arroja error */}
        Incrementar
      </button>
    </div>
  )
}


/* Mismo componente pero escrito con clases
class App extends Component{
  state = {
    contador : 0
  }
  
  incrementar = ()=>{
    this.setState({contador : this.state.contador + 1});
  }
  render() {
    return (
      <div>
        Contador : {this.state.contador};
      <button onClick={()=>this.incrementar } > 
        Incrementar
      </button>
      </div>
    )
  }
} */


export default App;
