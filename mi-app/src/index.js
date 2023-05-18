import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* StrictMode ayuda a escribir mejor codigo al mostrar warnings de algo que este mal */}
    <App />
  </React.StrictMode>
);

// JSX
// const x = React.createElement('p', null, 'Hola mundo')
// const x= ()=> <p>Hola Mundo</p> Error
// const X= (name)=> <p>Hola {name}</p>

// Estanadarizacion
// const Li = ({ children, edad, casado, colorFav }) => {
//   console.log(casado, colorFav);
//   return (
//     <li>
//       {children} con {edad} años
//     </li>
//   );
// };
// const X = () => (
//   <ul>
//     <Li edad={24} casado={false} colorFav={"Rojo"}> {/* <- Para destructuring */}
//       Jose {/* <- children */}
//     </Li>
//     <Li edad={40} casado={true} colorFav={"Negro"}>
//       Juan
//     </Li>
//     <Li edad={32} casado={true} colorFav={"Azul"}>
//       Felipe
//     </Li>
//   </ul>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(X("Juan"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
