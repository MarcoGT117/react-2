import { useRef } from "react";

const App = () => {
  const input = useRef();
  const file = useRef();
  const submit = () => {
    console.log(input.current.value);
    console.log(file.current.files[0]);

    const form = new FormData();
    form.append('archivo', file.current.files[0]);
    form.append('texto', input.current.value);
    fetch('/endpoint', {method: 'POST', body:'form'})
  };

  return (
    <div>
      <div>
        <span>Data</span>
        <input type="text" name="campo" ref={input} />
        <input type="file" ref={file}/>
      </div>
      <input type="submit" value="enviar" onClick={submit} />
    </div>
  );
};

export default App;
