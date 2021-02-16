import React from 'react';
import { useContext } from 'react';
import { Context } from '';

const AddButton = ({ click, itemCount, imagen, price, title }) => {

    const [selectedItems, setSelectedItems] = useContext(Context);
    
    const handleClick = () => {
        setSelectedItems([...selectedItems, {
            title : title,
            imagen: imagen, 
            price: price,
            inCart: itemCount,
        }])
    } 
    
    return (
        <button type="button" className="mt-3 mx-auto Add-button" onClick={() => handleClick()}>Agregar {itemCount}</button>
    );
}

export default AddButton;
