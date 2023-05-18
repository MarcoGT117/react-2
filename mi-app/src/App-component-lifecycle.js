// Componentes basados en clases
import { Component } from "react";

class Button extends Component{
    //Orden de ejecucion: constructor -> render -> componentDidMount
    constructor(props){
        super(props);
        console.log('constructor', props)
    } 
    
    //Este metodo se utiliza cuando queremos evaluar algo de nuestro DOM para mostrar algun modal o cuando queremos inicair llamados ajax para recuperar datos de alguna API
    componentDidMount(){
        console.log('componentDidMount ejecutado');
    }

    // Se ejecuta al actualizarse el componente, pe cuando se renderiza de nuevo. No se ejecuta al entrar por primera vez en la aplicacion
    componentDidUpdate = (prevProps, prevState) => {
      console.log('componentDidUpdate', prevProps, prevState);
    }
    
    //Se ejecuta cuando se desmonta el componente, no se ejecutara si alguna clase css le da display: none, ya que eso solo lo oculta, no lo desmonta
    componentWillUnmount(){
        console.log('Desmontando componente', this.props, this.state);
    }

    render(){
        console.log('Renderizado de Button ejecutado')
        return(
            <button onClick={()=> this.setState({prop : 1})}>Enviar en Button</button>
        )
    }
}

class App extends Component {
    state = {
        valor : 3
    }

    // El metodo de render se ejecuta en dos condiciones: Cuando llamamos a setState() y cuando el metodo render() del componente padre tambien se haya llamado
    render(){
        // this hace referencia a la clase App
        console.log(this.state);
        return(
            <div>
            <p>Hola Mundo</p>
            {this.state.valor === 3 ? <Button hola='mundo'/> : null}
            <button className={`${this.state.valor}`} onClick={ ()=> this.setState({ valor: 2 })}>  {/* Aqui se ejecutara render del Button porque al colocarlo aqui es un elemento hijo de App, y cada vez que cambie el state (Con setState()) todos los renders se re-ejecutan*/}
                Enviar en App
            </button>
            </div>
        )
    }
}

export default App