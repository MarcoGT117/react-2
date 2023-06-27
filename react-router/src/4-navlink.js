import { Routes, Route, NavLink, useMatch } from "react-router-dom";

const Portafolio = ()=> {
  return(
    <div>
    <h1>Portafolio</h1>
    <ul>
      <li>
        <NavLink end to={'/portafolio/proyecto-1'}> Proyecto 1</NavLink>
      </li>
      <li>
        <NavLink end to={'/portafolio/proyecto-2'}> Proyecto 2</NavLink>
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
            <NavLink end to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink end to={"/portafolio"}>Portafolio</NavLink>
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
