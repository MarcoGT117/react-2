import logo from "./logo.svg";
// import "./App.css";
import "./main.css"


/* Estilos Inline
 const estilo = (bg = '#333')=>(( {
  backgroundColor : bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
}))

const estilo2 = ()=>({
  boxShadow: '0 5px 3px rgba(0, 0, 0, 0.7)'
}) 

const Li = ({ children }) => {
  return <li style={{...estilo2, ...estilo()}} className="clase-li">{children}</li>;
}; 


function App() {
  const nombre = "Marco";
  return (
    <ul style={estilo('#976')} className="clase-css">
      <Li>valor de li</Li>
    </ul>
  );
*/

/* Estilos usando un archivo css */
  const Li = ({ children }) => {
    return <li className="clase-li shadow">{children}</li>;
  };

  
function App() {
  const nombre = "Marco";
  return (
    <ul className="clase-css">
      <Li>valor de li</Li>
    </ul>
  );
}


export default App;
