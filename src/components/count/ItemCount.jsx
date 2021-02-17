import React, {useState} from 'react';

const ItemCount = ({stock,initial}) => {

    const [count, setCount] = useState(initial);

    function onAdd(sign) {
        if (sign === '+' && count < stock) {
            setCount(count+1);
        } else if (sign === '-' && count > initial) {
            setCount(count-1);
        } 
    }
    
    return (
        <div>
          <div className="counter-container d-flex flex-row justify-content-around align-items-center shadow mt-3">
            <button className="btn" onClick={() => ('-')}> - </button> 
            <p className="count"> {count} </p>
            <button className="btn" onClick={() => ('+')}> + </button>
          </div> 
            <button className="btn" onClick={onAdd}>Agregar al carrito</button>
        </div>  
    );
}
export default ItemCount;