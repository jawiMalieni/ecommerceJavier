import React, {useState, useEffect} from 'react';
import Item from '../Components/Item';
import { getFirestore } from '../firebase/firebase';

const ItemListContainer = () => {
    const [loading , setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const productCollection = db.collection('products');
        productCollection.get().then((querySnapshot) => {
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
            console.log('Error searching products', error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className='row justify-content-center text-center'>
            <div className='col-12 mt-4'>
                <h3>Buzos con capucha</h3>
                {
                    loading && <h4>cargando...</h4>
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