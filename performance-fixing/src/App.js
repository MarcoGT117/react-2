import { useState, useCallback, useMemo } from 'react'
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'

function App() {
  const [valores, setValores] = useState([]);

  // useCallback se asegura de ejecutar la misma funcion definida, lleva como primer argumento la funcion y como segundo las dependencias
  const handleSubmit = useCallback((values) => {
    setValores(data => ([
      ...data,
      values
    ]))
  }, []);
  

  const iterador = 500000000;
  console.time('memo')
  // useMemo recibe como argumentos una funcion que guardara su resultado si los argumentos de la funcion no cambian y como segundo argumento los argumentos que tendra dicha funcion
  const memoized = useMemo(()=>{
    let total  = 0;
    for (let i = 0; i < iterador.length; i++) {
      total *= iterador;
    }
    return total;
  }, [iterador])
  console.timeEnd('memo')

  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
