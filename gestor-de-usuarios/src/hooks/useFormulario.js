import { useState } from "react";

const useFormulario = (inicial) => {
  // Hook useState
  const [formulario, setValues] = useState(inicial);

  // funcion handleChange
  const handleChange = (e) => {
    setValues({
      ...formulario, // Toma los valores previamente establecidos en formulario y los copia para que no se pierdan al realizar los cambios tecleando
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setValues(inicial); // Setea los valores a un objeto vacio
  };
  return [formulario, handleChange, reset];
};

export default useFormulario;
