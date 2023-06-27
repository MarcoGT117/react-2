import { Routes, Route, Link, useMatch } from "react-router-dom";

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
        <Route path=":proyecto_id" 
        element={<Proyecto />}/>
      </Routes>
    </div>
    </div>
  )
}

const Proyecto = ()=>{
  const match = useMatch("/portafolio/:proyecto_id");
  const { proyecto_id } = match.params
  console.log(match)
  console.log(proyecto_id)
  return(
    <h2>Proyecto {proyecto_id}</h2>
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
