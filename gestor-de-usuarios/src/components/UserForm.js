import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    nombre: "",
    apellido: "",
    email: "",
  });
//   console.log(formulario);
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset(); // La funcion fue definida en useFormulario, cuando se ejecute submit (Que se ejecuta con la propiedad onSubmit del form) borrara los campos del form
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Nombre"}
        value={formulario.nombre}
        onChange={handleChange}
        type="text"
        name="nombre"
        placeholder="Nombre"
      />
      <Input
        label={"Apellido"}
        value={formulario.apellido}
        onChange={handleChange}
        type="text"
        name="apellido"
        placeholder="Apellido"
      />
      <Input
        label={"Email"}
        value={formulario.email}
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Email"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
