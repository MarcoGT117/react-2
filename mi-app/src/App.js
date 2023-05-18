// Componentes basados en clases
import { Component } from "react";


class Input extends Component{
    render(){
        return(    // los valores de estas props las recibiremos de los values de los Input en el componente App 
            <input value={this.props.value} onChange={this.props.onChange} />
        )
    }
}

class App extends Component {
    state = {
        nombre : '',
        apellido : ''
    }

    updateValues = (prop, value)=> {
        this.setState({ [prop] : value })
    }

    render(){
        return(
            <div>
            <p>Nombre Completo: {`${this.state.nombre} ${this.state.apellido}`}</p>
            <br/>
            <Input value={ this.state.nombre } onChange={ e=> this.updateValues('nombre', e.target.value)  } />
            <Input value={ this.state.apellido } onChange={ e=> this.updateValues('apellido', e.target.value)  } />
            </div>
        )
    }
}

export default App