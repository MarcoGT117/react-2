import { Routes, Route, Link  } from "react-router-dom";


const App = () => {
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
          <Route exact path="/inicio" element={ <h1>Incio</h1> } />
          <Route path="/perfil" element={ <h1>Perfil</h1> } />
          <Route path="*" element={ <h1>La URL especificada es incorrecta (Error 404)</h1> } />
        </Routes>
      </section>
    </div>
  );
};

export default App;
