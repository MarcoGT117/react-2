import {Component} from 'react';

const styles = {
    title:{
        marginBottom: '30px'
    }
}

class Title extends Component{
    render(){
        return(
            <div style={styles.title}>
            <h1>Titulo</h1>
            </div>
        )
    }
}

export default Title