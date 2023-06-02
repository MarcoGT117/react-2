import { Component, createContext, useContext } from "react";

const Context1 = createContext("Contexto 1");
const Context2 = createContext("Contexto 2");

const Provider = ({ children }) => {
  return (
    <Context1.Provider value="Valor 1">
      <Context2.Provider value="Valor 2">{children}</Context2.Provider>
    </Context1.Provider>
  );
};

// Para Componentes basados en clases
class Componente extends Component {
  // Acceder a ambos contextos
  render() {
    return (
      <Context1.Consumer>
        {(valor1) => (
          <Context2.Consumer>{(valor2) => <div>{`valor de Context1 "${valor1}". Valor de Context2 "${valor2}"`}</div>}</Context2.Consumer>
        )}
      </Context1.Consumer>
    );
  }
}

// Para Componentes funcionales
const ComponenteFuncional = () => {
  const valor1 = useContext(Context1);
  const valor2 = useContext(Context2);

  return(
    <div>
      {`Componente funcional: ${valor1}, ${valor2}`}
    </div>
  )
}

const App = () => {
  return (
    <Provider>
      <Componente />
      <ComponenteFuncional />
    </Provider>
  );
};

export default App;
