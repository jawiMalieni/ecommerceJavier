import React, {useContex, useState, useEffect} from 'react';
import {link} from 'react-router-dom';
import Item from '../components/Item';
import { getFirestore } from '../firebase/firebase';

const ItemListContainer = () => {
    const [loading , setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const ItemCollection = db.Collection('products');
        ItemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                return (
                    <h2>Estamos cargando los productos. Por favor regresa mas tarde!</h2>
                )
            }
            setProducts(querySnapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            })));
        }).catch((error) => {
            console.log('Error searching product', error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className='row justify-content-center text-center'>
            <div className='col-12 mt-4'>
                <h3>Buzos con capucha</h3>
                {
                    loading && <h4>Aguarda que estamos procesando tu pedido...</h4>
                }
            </div>
                {products.length && products.map(product => (
                  <Item price={product.data.price} image={product.data.image} id={product.id}/>
                ))
                }
        </div>
    );
}

export default ItemListContainer;