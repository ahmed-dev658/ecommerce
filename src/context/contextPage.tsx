"use client"; // This is necessary for using browser APIs

import { ProductType } from "@/types/types";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CartContextType {
  count: number;
  addToCart: (product: ProductType) => void;
  cartItems: ProductType[];
  getLocal: () => string | null;
  setCount: Dispatch<SetStateAction<number>>;
  setCartItems: Dispatch<SetStateAction<ProductType[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  // Load from localStorage only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const parsedCart = JSON.parse(cart);
        setCartItems(parsedCart);
        setCount(parsedCart.length);
      }
    }
  }, []);

  const addToCart = (product: ProductType) => {
    const alreadyExists = cartItems.some((item) => item.id === product.id);

    if (!alreadyExists) {
      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
      setCount(updatedCart.length);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const getLocal = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("cart");
    }
    return null;
  };

  return (
    <CartContext.Provider
      value={{ count, addToCart, getLocal, cartItems, setCartItems, setCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
