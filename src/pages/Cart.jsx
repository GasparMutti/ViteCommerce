import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalProvider";

export default function Cart() {
  const {cart} = useContext(GlobalContext);
  return (
    <>
      <div>cart</div>
      {cart.map((prod) => (
        <p>{prod.name}</p>
      ))}
    </>
  );
}
