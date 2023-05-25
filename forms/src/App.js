import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: "",
    texto: "",
    select: "",
    check: false,
    estado: "metal",
  });

  //En vez de usar el evento e se hace un destructuring para extraer directamente su propiedad target
  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.type === "checkbox" ? target.checked : target.value, //Revisa si el tipo del value es checkbox para que actue de manera distinta en caso de que lo sea, de lo contrario marcara check: 'on'
    });
  };
  console.log(value);
  return (
    <div>
      <input
        name="normal"
        type="text"
        value={value.normal}
        onChange={handleChange}
      />{" "}
      {/* la propiedad value es necesaria para controlled components porque debe de tener el valor que debe tener */}
      {value.normal.length < 5 ? (
        <span>La longitud debe de ser de al menos 5 caracteres</span>
      ) : null}
      <br />
      <textarea name="texto" onChange={handleChange} value={value.texto} />
      <br />
      <select value={value.select} name="select" onChange={handleChange}>
        <option value={""}>-- Seleccione --</option>
        <option value={"feliz"}>Feliz</option>
        <option value={"triste"}>Triste</option>
        <option value={"satisfecho"}>Satisfecho</option>
      </select>
      {value.select === "" ? <span>Seleccione una opcion</span> : null}
      <br />
      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />{" "}
      Checkbox
      <br />
      {/* Esta forma de escribir los radio buttons funciona, pero si se quiere usar un valor por defecto no lo hara
        <div onChange={handleChange}>
        <label>Tipo de Musica</label> <br/>
        <input type="radio" value={'rap'} name="estado"/>Rap <br/>
        <input type="radio" value={'metal'} name="estado"/>Metal <br/>
        <input type="radio" value={'industrial'} name="estado"/>Industrial <br/>
        </div> */}
      {/* Esta forma si permite mas control sobre cada radio button  */}
      <div>
        <label>Tipo de Musica</label> <br />
        <input onChange={handleChange} type="radio" value={"rap"} name="estado" checked={value.estado === 'rap' }/>
        Rap <br />
        <input onChange={handleChange} type="radio" value={"metal"} name="estado" checked={value.estado === 'metal'} />
        Metal <br />
        <input onChange={handleChange} type="radio" value={"industrial"} name="estado" checked={value.estado === 'industrial'} />
        Industrial <br />
      </div>
    </div>
  );
};

export default App;
