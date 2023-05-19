import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      {
        name: "Tomate",
        price: 1500,
        img: "/images/tomate.jpg",
      },
      {
        name: "Arbejas",
        price: 2500,
        img: "/images/arbejas.jpg",
      },
      {
        name: "Lechuga",
        price: 500,
        img: "/images/lechuga.jpg",
      },
    ],
    cart: [],
    isCartVisible: false
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if(cart.find(x => x.name === product.name)){
      const newCar = cart.map(x => x.name === product.name ? ({
        ...x,
        qty: x.qty+1
      }): x)
      return this.setState({cart: newCar})
    }
    return this.setState({
      cart: this.state.cart.concat({
      ...product,
      qty: 1,
    })
  })
  }

  showCart = ()=>{
    if(!this.state.cart.length) return;

    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state;
    return (
      <div>
        <Navbar cart = {this.state.cart} isCartVisible={isCartVisible} showCart={this.showCart}/>
          <Layout>
            <Title />
            <Products
              addToCart={this.addToCart}
              products={this.state.products}
            />
          </Layout>

      </div>
    );
  }
}
export default App;
