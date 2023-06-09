import { Component } from "react";

const styles = {
    cartDetails:{
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width:'300px',
        right:'50px'
    },
    list:{
        margin: '0',
        padding: '0'
    }, 
    product:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class CartDetails extends Component{
    render() {
        const {cart} = this.props;

      return (
        <div style={styles.cartDetails}>
          <ul style={styles.list}>
            {cart.map(x => <li style={styles.product} key={x.name}>
                <img alt={x.name} src={x.img} width={50} height={32}/>
                {x.name} {x.qty}
                </li>)}
          </ul>
        </div>
      )
    }
}

export default CartDetails;