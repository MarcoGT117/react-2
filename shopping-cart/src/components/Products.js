import { Component } from "react";
import Product from './Product';

const style = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Products extends Component{
    render(){
        // Props del componente en App
        const { products, addToCart } = this.props;
        return(
            <div style={style.products}>
                {products.map(product => 
                    <Product 
                    addToCart={addToCart}
                    key={product.name}
                    product={product} />)}
            </div>
        )
    }
}

export default Products