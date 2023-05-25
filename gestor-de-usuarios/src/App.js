import Input from "./components/Input";
import useFormulario from "./hooks/useFormulario";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const [formulario, handleChange, reset] = useFormulario({
    nombre: "",
    apellido: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset(); // La funcion fue definida en useFormulario, cuando se ejecute submit (Que se ejecuta con la propiedad onSubmit del form) borrara los campos del form
  };
  console.log(formulario, usuarios);
  return (
    <div className="outer">
      <Container>
        <Card>
          <div className="inner">
            <form onSubmit={submit}>
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
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((usuario) => (
              <li key={usuario.email}>
                {usuario.nombre} {usuario.apellido}: {usuario.email}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
