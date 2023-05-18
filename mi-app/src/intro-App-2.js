import Button from './Button'

const App = () => {
  const miVariable = false;

  const arr = [
    'Juan',
    'Jose',
    'Roberto'
  ]
  if (miVariable) {
    return(
        <p>miVariable es true</p>
    );
  }
    return(
      <div>
        <h1 onClick={e => console.log("Click en H1", e)}>Hola Mundo</h1>
        {arr.map(el => <p key={el}>{el}</p>)}
        <Button onClick = {()=> console.log("has hecho click")}>Enviar</Button>
        </div>
      );
    
};

export default App