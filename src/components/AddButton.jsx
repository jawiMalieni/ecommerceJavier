import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context/CartContex';

const AddButton = ({ click, itemCount, image, price, title }) => {

    const [selectedItems, setSelectedItems] = useContext(Context);
    
    const handleClick = () => {
        setSelectedItems([...selectedItems, {
            title : title,
            image: image, 
            price: price,
            inCart: itemCount,
        }])
    } 
    
    return (
        <button type="button" onClick={() => handleClick()}>Agregar {itemCount}</button>
    );
}

export default AddButton;