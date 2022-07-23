import './App.css';
import Product from "./Product";
import React from 'react';
import {result} from "ramda/src/internal/_xfBase";

class App extends React.Component {
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
                            <Product product={product}/>
                        )
                    }
                </div>
            )
        }
    }
}

export default App;
