// createContext nos ayuda a crear contextos, useContext nos permita utilizar contextos dentro de componente funcionales
import { createContext, useContext } from "react";

// createContext recibe como argumento un valor por default, ya sean arrays, objetos o cualquier primitivo. Este valor se va a seleccionar en caso de que no creemos un provider
const DefaultContext = createContext("valor por defecto");
const ContextSinProvider = createContext("valor por defecto 2");
// Un provider se encarga de pasar el contexto hacia abajo (hacia los componentes hijos)
const DefaultProvider = ({ children }) => {
  return (
    <DefaultContext.DefaultProvider value={"mi valor"}>
      {children}
    </DefaultContext.DefaultProvider>
  );
};

const Contenido = () => {
  const ctx = useContext(DefaultContext);
  return <div>{ctx}</div>;
};

const ContenidoSinProvider = () => {
  const ctx = useContext(ContextSinProvider);
  return <div>{ctx}</div>;
};
const App = () => {
  return (
    <div>
      <DefaultProvider>
        <Contenido />
        <ContenidoSinProvider />
      </DefaultProvider>
    </div>
  );
};

export default App;
