import React from 'react';

export default class Cart extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            products: [
                {id: 1, name: 'apple', price: '$2', quantity: 2},
                {id: 2, name: 'banana', price: '$1', quantity: 1},
                {id: 3, name: 'cherry', price: '$3', quantity: 4},
            ],
        }
    }

    render () {
        return (
            <div className="products">
                {this.state.products.map(product => (
            <div className="product">
                <div className ="product_details">
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                </div>
                <div className ="product_quantity-container">
                    <button>+</button>
                    <p>{product.quantity}</p>
                    <button>-</button>
                </div>
                </div>
            ))}
            </div>
        );
    }
}
