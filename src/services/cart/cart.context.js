import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeID !== rst.placeID) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };
  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };
  return (
    <CartContext.Provider
      // Provider value not values if not we got undefined
      value={{
        addToCart: add,
        clearCart: clear,
        cart,
        restaurant,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
