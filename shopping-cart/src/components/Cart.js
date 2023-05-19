import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CartDetails from "./CartDetails";

const styles = {
  cart: {
    backgroundColor: "#359a2c",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    padding: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: "12px",
    top: "20px",
  },
};

class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props;
    const qty = cart.reduce((acc, el) => acc + el.qty, 0);
    return (
      <div>
        <span style={styles.bubble}>
            {(qty !== 0) ?
                <BubbleAlert value={qty}/> :
                null
            } 
        </span>
        <button onClick={showCart} style={styles.cart}>Carro</button>
        {isCartVisible ? <CartDetails cart={cart}/> : null}
        
      </div>
    );
  }
}

export default Cart;
