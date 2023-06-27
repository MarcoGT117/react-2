import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/portafolio"}>Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={ <h1>Incio</h1> }> {/* El path debe ser igual a la ruta especificada en la propiedad to de Link */}

          </Route>
          <Route path="/portafolio" element={ <h1>Portafolio</h1> }>
          </Route>
        </Routes>
      </section>
    </div>
  );
};

export default App;
