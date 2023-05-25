import { useRef } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();
  const focus = ()=>{
    inputRef.current.focus();
  };
  const click = () => console.log(ref);

  return (
    <div>
      <p onClick={click} ref={ref}>Hola</p> 
      <input ref={inputRef}/>
      <button onClick={focus}>Focus</button>
    </div>

  );
};

export default App;
