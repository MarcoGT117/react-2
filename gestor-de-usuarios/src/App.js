import Card from "./components/Card";
import Container from "./components/Container";
import { useState } from "react";
import UserForm from "./components/UserForm";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };
  console.log(usuarios);
  return (
    <div className="outer">
      <Container>
        <Card>
          <div className="inner">
            <UserForm submit={submit} />
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
