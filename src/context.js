/* eslint no-unused-vars: 0 */
import React, { useState } from "react";
import productData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = React.useState(productData);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [totalCartPrice, setTotalCartPrice] = React.useState(0);
  const [filteredProduct, setFilteredProduct] = React.useState(products);

  const filterProductsByName = React.useCallback((name) => {
    setFilteredProduct(() => {
      const newArray = products.filter((item) => item.name.includes(name));
      return newArray;
    });
  }, []);

  // const addProductToCart = React.useCallback((product) => {
  //   console.log("-----------product---------------", product);
  //   setUsers([...users, product]);
  //   if (!shoppingCart.find((cartItem) => cartItem.id !== product.id)) {
  //     setShoppingCart([...shoppingCart, product]);
  //   }
  //   console.log("----------shoppingCart=======-----", shoppingCart);
  //   console.log("----------users=======-----", users);
  // }, []);

  const addProductToCart = (product) => {
    console.log("'''==", product, shoppingCart);
    if (!shoppingCart.find((cartItem) => cartItem.name === product.name)) {
      setShoppingCart([...shoppingCart, product]);
    }
    console.log("----------shoppingCart=======-----", shoppingCart);
  };

  // const removeProductFromCartAtIndex = React.useCallback((name) => {
  //   console.log("---------", name);
  //   setShoppingCart(shoppingCart.filter((item) => item.name !== name));
  // }, []);

  const removeProductFromCartAtIndex = (name) => {
    console.log("---------", name);
    setShoppingCart(shoppingCart.filter((item) => item.name !== name));
  };

  React.useEffect(() => {
    setTotalCartPrice(
      shoppingCart
        .reduce((acc, value) => {
          return acc + value.pricePerUnit / 100;
        }, 0)
        .toFixed(2)
    );
  }, [shoppingCart]);

  const providerValue = React.useMemo(
    () => ({
      products,
      filteredProduct,
      shoppingCart,
      totalCartPrice,
      actions: {
        filterProductsByName,
        addProductToCart,
        removeProductFromCartAtIndex,
      },
    }),
    [
      products,
      filteredProduct,
      shoppingCart,
      totalCartPrice,
      filterProductsByName,
      addProductToCart,
      removeProductFromCartAtIndex,
    ]
  );

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};
export default Context;
