import { Routes, Route, Link, useNavigate } from "react-router-dom";


const App = () => {
  const navigate = useNavigate();

  const forward = () => navigate(1);
  const back = () => navigate(-1);
/*   const push = url => navigate(url);
 */
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
        <button onClick={back}>Regresar</button>
        <button onClick={forward}>Ir hacia adelante</button>
{/*         <button onClick={push("/hola-mundo")}>Usar metodo push</button>
 */}
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
