import React from 'react';
import {useContext, useEffect, useState} from 'react';
import { Context } from '../Context/CartContex';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const CartIcon = () => {
   
    const [selectedItems] = useContext(Context);
    const [amount, setAmount] = useState(0);

    useEffect(()=> {
      let fullAmount = 0;
      if(selectedItems.length > 0) {
          selectedItems.map(item => (
              fullAmount += item.inCart
          ))
          setAmount(fullAmount);
      }
  }, [selectedItems])

    return (
        <a className="nav-link" href="#">
          <span className="badge badge-pill badge-light">{amount}</span>
          <ShoppingCartIcon color="secondary" fontSize="large"/>
	    </a>
    );
};

export default CartIcon;