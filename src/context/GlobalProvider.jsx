import React, {createContext, useState} from "react";
export const GlobalContext = createContext([]);

export default function GlobalProvider({children}) {
  const products = [
    {
      name: "Teclado Gaming",
      price: 10000,
      img: "https://redragon.es/content/uploads/2021/07/DRAGONBORN-1.png",
      id: 0,
      cuantity: 0,
    },
    {
      name: "Mouse Gaming",
      price: 3500,
      img: "https://redragon.es/content/uploads/2021/04/CETROPHORUS-RGB.png",
      id: 1,
      cuantity: 0,
    },
    {
      name: "Headsets Gaming",
      price: 6000,
      img: "https://www.venex.com.ar/products_images/1560345675_h90111.png",
      id: 2,
      cuantity: 0,
    },
  ];

  const [cart, setCart] = useState([]);
  if (cart.length > 0) console.log(cart);

  const addToCart = (product) => {
    const productInCart = cart.find((prod) => prod.id === product.id);
    if (productInCart) {
      productInCart.cuantity++;
      const productIndex = cart.findIndex((prod) => prod.id === product.id);
      const newCart = [...cart];
      newCart.splice(productIndex, 1, productInCart);
      setCart(newCart);
      console.log(cart);
    } else {
      setCart([...cart, product]);
    }
  };
  return (
    <GlobalContext.Provider value={{products, addToCart, cart}}>
      {children}
    </GlobalContext.Provider>
  );
}
