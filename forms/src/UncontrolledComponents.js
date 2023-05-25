
function App() {
  const submit = e =>{
    e.preventDefault();
    console.log(e.target);
    console.log(new FormData(e.target)); // Regresa formData el cual contiene FormData { campo → "hola", "campo-2" → "mundo" }
    const data = Array.from(new FormData(e.target));  // Data seran dos arrays (Uno por cada campo) donde el primer elemento sera el name especificado en input y el segundo el valor introducido
    console.log(data)

    const objectData = Object.fromEntries(data); // Creara un objeto a partir del array, tomando el primer elemento como la key y el segundo com el value
    console.log(objectData)
}
  return (
    <div>
      <form onSubmit={submit}> {/* interceptando form con React */}
        <div>
          <span>
            Datos: 
          </span>
          <input name='campo'/>
          <input name='campo-2'/>
          <input type='submit' value='Enviar'/>
        </div>
      </form>
    </div>
  );
}

export default App;
