import * as React from "react";
import ItemList from "../containers/ItemListContainer";
import productList from "../mocks/productsList";

const ItemListContainer = ({ greeting }) => {
    
    const [products, setProducts] = React.useState([])
    
    React.useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => { resolve(productList) }, 3000);
        });

        myPromise.then((result) => setProducts(result));
    }, []);








    return (
        <div>
        <a className="h1">{greeting}</a>
        <ItemList products={products} />
        </div>
    );
}
export default ItemListContainer;