import React, { createContext, useState, useContext, useEffect } from 'react';

export const ContextAPI = createContext();

export function ContextAPIProvider({ children }) {
  const [totalProducts, setTotalProducts] = useState(0);

  function addToCart() {
    setTotalProducts(totalProducts + 1)

    localStorage.setItem('@corebiz/cart', JSON.stringify({
      qty: totalProducts + 1
    }));
  }

  useEffect(() => {
    if (localStorage.getItem('@corebiz/cart')) {
      const { qty } = JSON.parse(localStorage.getItem('@corebiz/cart'))
      setTotalProducts(qty);
    }
  }, [])

  return (
    <ContextAPI.Provider
      value={{
        totalProducts,
        addToCart
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
}

export const useContextAPI = () => {
  return useContext(ContextAPI);
};
