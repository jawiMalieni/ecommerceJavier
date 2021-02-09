

const Item = ({product}) => {
    return (
        <div>
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <p>Stock: {product.Stock}</p>    
        </div>
    )
}

export default Item
