import { Component, createContext } from "react";

const Context = createContext("mi valor");

const Provider = ({ children }) => {
  return <Context.Provider value="otro valor">{children}</Context.Provider>;
};

class Componente extends Component {
  /* Metodo 1 para ingresar al Context desde un componente de clase, si o si debe llamarse contextType  
  static contextType= Context
*/
  render() {
    console.log(this.context);
    return <div>Hola mundo</div>;
  }
}
// Metodo 2 para obtener el Context
Componente.contextType = Context;

const App = () => {
  return (
    <Provider>
      <Componente />
      {/* Metodo 3 para obtener el contexto. Consumer es un componente que viene por defecto en Context, este devuelve el valor del contexto y debemos procesarlo en una funcion */}
      <Context.Consumer>
        {valor => <div>{valor}</div>}
      </Context.Consumer>
    </Provider>
  );
};

export default App;
