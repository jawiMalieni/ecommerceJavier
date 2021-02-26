import React, { useState } from "react";
import Item from "./Item";

const listProducts = [{ id: 1, name:""}, { id: 2, name: "" }];
const ItemList = () => {
  return (
    <>
      <div>
        {listProducts.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;