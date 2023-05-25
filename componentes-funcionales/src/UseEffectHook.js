import { useState, useEffect } from "react";

/* Reglas de los hgooks:
  - No se llaman en loops ni condicionales (if, while, foreach, etc.)
  - Idealmente se encuentra en el nivel mas alto de nuestro componenete
  - Solo se llaman en dos lugares: Dentro de componentes de React y en Custom Hooks
  - Recomendacion: Cuando creemos un custom hook se nombran como useNombreDeseado
*/

// Custom hook
const useContador = (inicial) => {
  // Aqui useState es una funcion que recibe como argumento el valor inicial del contador
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000);
    return () => clearInterval(i);
  }, [contador]);

  return <p>Interval</p>;
};

const App = () => {
  // Destructuring del hook
  const [contador, incrementar] = useContador(0);
  // El hook useEffect es usado principalmente al momento de hacer llamado a APIs
  // useEffect recibe dos argumentos, uno es la funcion con la logica que va a ejecutar, el segundo son las dependencias que necesita para funcionar o dicho de otro modo cada que las variables que asignamos como dependencias cambien la funcion del primer argumento se ejecutara, si este segundo argumento no esta, el hook se ejecutara siempre que haya un cambio en el componente en el que este definido
  useEffect(() => {
    document.title = contador;
  }, [contador]);

  return (
    <div>
      Contador : {contador}
      <button onClick={incrementar}>
        {" "}
        {/* Intente usar el operador ++, pero al ser contador un const arroja error */}
        Incrementar
      </button>
      <Interval contador={contador} />
    </div>
  );
};

export default App;
