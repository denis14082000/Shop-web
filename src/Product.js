import './Product.css'

function Product(props) {
    return (
        <div className="product-item">
            <div className="product-img">
                <a href="">
                    <img src={props.product.imageUrl} alt={props.product.name}/>
                </a>
            </div>
            <h3>{props.product.name}</h3>
            <h4>{props.product.description}</h4>
            <span className="price">₽ {props.product.price}</span>
        </div>
    )
}

export default Product