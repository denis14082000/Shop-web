import './Product.css'
import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/product', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': '*',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        products: result.products
                    });
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {
        const {isLoaded, products} = this.state;
        if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div className="product-list">
                    {
                        products.map(product =>
                            <div className="product-item">
                                <div className="product-img">
                                    <a href="src/products/Product">
                                        <img src={product.imageUrl} alt={product.name}/>
                                    </a>
                                </div>
                                <h3>{product.name}</h3>
                                <h4>{product.description}</h4>
                                <span className="price">₽ {product.price}</span>
                            </div>
                        )
                    }
                </div>
            )
        }
    }
}

export default Product