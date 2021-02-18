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
    }
    
    return (
        <div>
            <ButtonGroup className="mb-2">
              <Button onClick={() => ('-')}> - </Button>
              <Button onClick={onAdd}>Agregar al carrito</Button>
              <Button onClick={() => ('+')}> + </Button>
            </ButtonGroup>
        </div>       
    );
}
export default ItemCount;