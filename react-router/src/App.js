import { Routes, Route, Link, useLocation  } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App = () => {
  const query = useQuery();
  const hola = query.get('hola');
  const mundo = query.get('mundo');

  console.log(hola);
  console.log(mundo)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/perfil"}>Perfil</Link>
          </li>

        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={ <h1>Incio</h1> } />
          <Route path="/perfil" element={ <h1>Perfil</h1> } />
          <Route path="*" element={ <h1>La URL especificada es incorrecta (Error 404)</h1> } />
        </Routes>
      </section>
    </div>
  );
};

export default App;
