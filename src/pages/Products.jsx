import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalProvider";

export default function Products() {
  const {products, addToCart, cart} = useContext(GlobalContext);
  return (
    <div style={{display: "flex"}}>
      {products.map((prod) => {
        return (
          <div style={{textAlign: "center"}}>
            <img
              src={prod.img}
              alt={prod.name}
              style={{width: "150px", height: "150px"}}
            />
            <p>{prod.name}</p>
            <p>{prod.price.toLocaleString()}</p>
            <button onClick={() => addToCart(prod)}>Add to cart</button>
          </div>
        );
      })}
      <p>{cart.length}</p>
    </div>
  );
}
