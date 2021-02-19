import React, {useState} from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';
const ItemCount = ({stock,initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    function onAdd(sign) {
        if (sign === '+' && count < stock) {
            setCount(count+1);
        } else if (sign === '-' && count > initial) {
            setCount(count-1);
        } 
    };
     const handlerOnAdd= () =>{
         onAdd(count)
     }
    return (
        <div>
            <ButtonGroup className="mb-2">
              <Button onClick={() => ('-')}> - </Button>
              <Button onClick={handlerOnAdd}>Agregar al carrito</Button>
              <Button onClick={() => ('+')}> + </Button>
            </ButtonGroup>
        </div>       
    );
}
export default ItemCount;