import { memo } from "react";

const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`);
  return <li>{fullname}</li>;
});

/* Este metodo ayuda a que solo se rendericen los cambios en sus propiedades y no todo el componente
const MLi = memo(Li);
Se puede reemplazar la redeclaraion del componente con memo simplemente incluyendo el contenido del componente dentro de los parametros de memo */

const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
      ))}
    </ul>
  );
};

export default MyList;
