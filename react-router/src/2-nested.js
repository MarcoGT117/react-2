import { Routes, Route, Link } from "react-router-dom";

const Portafolio = ()=> {
  return(
    <div>
    <h1>Portafolio</h1>
    <ul>
      <li>
        <Link to={'/portafolio/proyecto-1'}> Proyecto 1</Link>
      </li>
      <li>
        <Link to={'/portafolio/proyecto-2'}> Proyecto 2</Link>
      </li>
    </ul>
    <div>
      <Routes>
        <Route path="proyecto-1" element={<h2>Proyecto 1</h2>}/>
        <Route path="proyecto-2" element={<h2>Proyecto 2</h2>}/>
      </Routes>
    </div>
    </div>
  )
}
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
          <Route exact path="/" element={ <h1>Incio</h1> } /> {/* El path debe ser igual a la ruta especificada en la propiedad to de Link */}
          <Route path="/portafolio/*" element={<Portafolio/>} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
