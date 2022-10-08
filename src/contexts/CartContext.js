import { createContext, useContext, useState } from "react";

const initialState = {
  quantity: 0,
};

const CartContext = createContext(initialState);

export const CartContextStore = (props) => {
  const [cart, setCart] = useState(initialState);

  const addItemToCart = (idProduct) => {
    setCart((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + 1,
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);