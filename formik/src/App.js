import { Formik, Form, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";

// Añade validacion, esta propiedad contiene una funcion que tiene como argumento los values y que contiene los potenciales errores
const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = "Requerido";
  } else if (values.nombre.length < 5) {
    errors.nombre = "Minimo cinco caracteres";
  }

  if (!values.apellido) {
    errors.apellido = "Requerido";
  } else if (values.apellido.length < 5) {
    errors.apellido = "Minimo cinco caracteres";
  }

  if (!values.email) {
    errors.email = "Requerido";
  } else if (values.email.length < 5) {
    errors.email = "Minimo cinco caracteres";
  }

  if (!values.email) {
    errors.email = "Requerido";
  } else if (values.email.length < 5) {
    errors.email = "Minimo cinco caracteres";
  } else if (!values.email.includes("@")) {
    errors.email = "Introduzca un Correo valido";
  }
  if (!values.radio) {
    errors.radio = "Requerido";
  }
  return errors;
};

const App = () => {
  // useFormik recibe un objeto de configuracion
  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        email: "",
        opciones: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          {/* Reemplazaremos Field con el componente custom de TextInput */}
          <TextInput name="nombre" label={"Nombre"} />
          <br />
          <TextInput name="apellido" label={"Apellido"} />
          <br />
          <TextInput name="email" label={"Email"} />
          <br />
          <Select label="Opciones" name="opciones">
            <option value={""}>-- Seleccione --</option>
            <option value={"opcion-1"}>Opcion 1</option>
            <option value={"opcion-2"}>Opcion 2</option>
            <option value={"opcion-3"}>Opcion 3</option>
          </Select>
          <br />
          <Checkbox name="accept" />
          Aceptar terminos y condiciones
          <Radio label={"radio 1"} name="radio" value="radio1" />
          <Radio label={"radio 2"} name="radio" value="radio3" />
          <Radio label={"radio 3"} name="radio" value="radio3" />
          <ErrorMessage name="radio" />
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
