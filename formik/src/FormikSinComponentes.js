import { useFormik } from "formik";

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
  return errors;
};

const App = () => {
  // useFormik recibe un objeto de configuracion
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          onChange={formik.handleChange}
          onBlur={
            formik.handleBlur
          } /* Esta propiedad permite saber si se ha seleccionado el input, la funcion handleBlur maneja el resto */
          values={formik.values.nombre}
        />
        {/*                   touched viene de handleBlur */}
        {formik.errors.nombre && formik.touched.nombre ? (
          <div>{formik.errors.nombre}</div>
        ) : null}
        <br />
        <label>Apellido</label>
        <input
          type="text"
          {...formik.getFieldProps("apellido")}
          /* Cambiaremos todas estas propiedades usando un destructuring de formik y la funcion getFieldProps para acortar codigo, el input de nombre lo dejare intacto para comparar   
          name="apellido"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.apellido} */
        />
        {formik.errors.apellido && formik.touched.apellido ? (
          <div>{formik.errors.apellido}</div>
        ) : null}

        <br />
        <label>Email</label>
        <input
          type="text"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App;
