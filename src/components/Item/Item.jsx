import {Card, ListGroup} from 'react-bootstrap';

const Item = ({ product }) => {
    return (
     //   <div>
     //   <h3>{product.name}</h3>
     //   <p>Price: {product.price}</p>
     //   <p>Stock: {product.Stock}</p>    
     //   </div>
        <Card style={{ width: '18rem' }}>
        <Card.Header>{product.name}</Card.Header>
          <ListGroup variant="flush">
          <ListGroup.Item>Price: {product.price}</ListGroup.Item>
         <ListGroup.Item>{product.Stock}</ListGroup.Item>
        </ListGroup>
        </Card>
    );
};

export default Item
