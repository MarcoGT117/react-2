import styled, { keyframes } from "styled-components";

//Se puede usar `` en vez de () para los parametros de los metodos, se le llama tag template literals
const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

// Para añadir pseudoclases como hover se coloca un &:hover
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 10px 15px;
  border: solid 2px red;
  border-radious: 4px;
  margin: 5px 10px;
  cursor: pointer;
  transition: box-shadow 0.15s ease;
  &:hover {
    box-shadow: 2px 4px 5px rgb(0,0,0,0.3) 
  }
`;

// De esta forma se pueden heredar propiedades de los componentes 
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  margin-bottom: 25px;
`

// Transformar componente usual a un styled component
const Link = ({className, ...props})=>{
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`

/* 
 const Input = ({ className })=>{
  return  <input type="text" className={className}/>
} 
Se puede escrtibir este mismo componente de manera mas concisa de la forma que sigue:
*/

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red',

}))`
font-size: 20px;
border: 1'x solid red;
color: ${props => props.color}
`

// Para animaciones CSS
const girar = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotar = styled.div`
  animation: ${girar} 2s linear infinite;
  display: inline-block;


  .image{
    width: 150px;
    }
`

const Password = styled(Input).attrs(props => ({
  type: 'password',
}))``
const App = () => {
  return (
    <Content>
      <P>Hola mundo</P>
      <Button>Enviar</Button>
      <Button primary={true}>Enviar Primario</Button>
      <BlockButton primary={true}>Block Button</BlockButton>
      <BlockButton primary={true} as={"a"} href="#">Link</BlockButton> {/* Al incluir "as" se aplicaran los estilos definidos en BlockButton pero se comportara como un link */}

      <Link>Link</Link>
      <StyledLink>Link usando Styled</StyledLink>
      <Input color={'blue'}/>
      <Password/>
      <br/>
      <Rotar><img className="image" src="/cargando.png" alt="cargando"/></Rotar>
    </Content>
  );
};

export default App;