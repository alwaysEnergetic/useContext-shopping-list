/* eslint no-unused-vars: 0 */
import React from "react";
import productData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = React.useState(productData);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [totalCartPrice, setTotalCartPrice] = React.useState(0);
  const [filteredProduct, setFilteredProduct] = React.useState(productData);

  const filterProductsByName = React.useCallback((name) => {
    setFilteredProduct(() => {
      const newArray = products.filter((item) => item.name.includes(name));
      return newArray;
    });
  }, []);

  const addProductToCart = React.useCallback(
    (product) => {
      if (!shoppingCart.find((cartItem) => cartItem.name === product.name)) {
        setShoppingCart([...shoppingCart, product]);
      }
    },
    [shoppingCart]
  );

  const removeProductFromCartAtIndex = React.useCallback(
    (name) => {
      setShoppingCart(shoppingCart.filter((item) => item.name !== name));
    },
    [shoppingCart]
  );

  React.useEffect(() => {
    setTotalCartPrice(
      shoppingCart.reduce((acc, value) => {
        return acc + value.pricePerUnit / 100;
      }, 0)
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
