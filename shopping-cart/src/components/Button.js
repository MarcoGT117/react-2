import {Component} from 'react'

const styles = {
    button:{
        backgroundColor : '#0a283e',
        color: '#fff',
        borderRadius: '5px',
        border: 'none',
        padding: '15px 20px',
        cursor: 'pointer'
    }
}

class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props}/>
        )
}
}

export default Button