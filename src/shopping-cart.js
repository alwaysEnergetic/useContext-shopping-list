/* eslint no-unused-vars: 0 */
import React, { useContext } from "react";
import AppContext from "./context";

export default () => {
  const { actions, shoppingCart } = useContext(AppContext);

  const display = (
    <div className="shopping-item">
      {shoppingCart.map((item, index) => (
        <div key={index}>
          <label>{item.name}</label>
          &nbsp; &nbsp; &nbsp;
          <label>{item.pricePerUnit / 100} $</label>
          &nbsp; &nbsp; &nbsp;
          <button
            onClick={() => actions.removeProductFromCartAtIndex(item.name)}
          >
            Remove Carts
          </button>
        </div>
      ))}
    </div>
  );
  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
      {display}
    </div>
  );
};
