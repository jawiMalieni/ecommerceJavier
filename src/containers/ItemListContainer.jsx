import React, { useState, useEffect } from "react";
import ItemCount from "../components/ItemCount";
import productList from "../mocks/productsList";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ greeting }) => {
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => { resolve(productList) }, 3000);
        });

        myPromise.then((result) => setProducts(result));
    }, []);

    return (
        <div>
        <a className="h1">{greeting}</a>
       <ItemList products={products} />
       
       <ItemCount />
       
       </div>
    );
}
export default ItemListContainer;

