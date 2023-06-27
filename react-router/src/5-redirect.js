import { useEffect } from 'react'
import { Routes, Route, Link, useNavigate  } from "react-router-dom";

const Redirect = ({ to }) => {
  let navigate = useNavigate()
  useEffect(() => {
      navigate(to)
  })

  return null
}

const Portafolio = ()=>{
  const logIn = false;

  if(!logIn){
    return(
      <Redirect to="/" />
    )
  }

  return(
    <h1>Portafolio</h1>
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
            <Link to={"/perfil"}>Perfil</Link>
          </li>
          <li>
            <Link to={"/portafolio"}>Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path='/' element={<Redirect to={"/inicio"}/>} />
          <Route exact path="/inicio" element={ <h1>Incio</h1> } />
          <Route path="/perfil" element={ <h1>Perfil</h1> } />
          <Route path="/portafolio" element={ <Portafolio/> } />
        </Routes>
      </section>
    </div>
  );
};

export default App;
