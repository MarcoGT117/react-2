import { useReducer, useState } from "react";

const inicial = { contador: 0 }

// action = {type: 'string', payload: any}
const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { contador : state.contador + 1   }
    case 'decrementar':
      return { contador: state.contador - 1 }
    case 'set':
      return { contador: action.payload}
      default:
        console.log('error')
      break;
  }
}
const App = ()=>{
  const [ state, dispatch ] = useReducer(reducer, inicial)
  const [valor, setValor] = useState(0)
  return(
    <div>
      Contador: {state.contador}
      <input value={valor} onChange={e=> setValor(e.target.value)} />
      <button onClick={()=> dispatch({ type: 'incrementar' })} >Mas</button>
      <button onClick={()=> dispatch({ type: 'decrementar' })} >Menos</button>
      <button onClick={()=> dispatch({ type: 'set', payload: valor })} >Set</button>
    </div>
  )
}
export default App;
