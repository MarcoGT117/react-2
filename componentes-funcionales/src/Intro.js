
// Este tipo de componentes pueden ser creados mediante arrow founctions o functions convencionales

const App = ()=>{
    return (
      <div>
        <MiComponente miProp={"Hola mundo"} />
      </div>
    )
}

const MiComponente = ({miProp})=> {
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

export default App;
