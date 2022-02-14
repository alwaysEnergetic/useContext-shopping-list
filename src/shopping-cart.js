/* eslint no-unused-vars: 0 */
import React, { useContext } from "react";
import AppContext from "./context";

export default () => {
  const { shoppingCart, actions } = useContext(AppContext);

  console.log("------------shoppingCart----------", shoppingCart);
  return (
    <>
      <div className="shopping-cart">Shopping Cart</div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Operation:</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.pricePerUnit / 100}</td>
              <td>
                <button
                  onClick={() =>
                    actions.removeProductFromCartAtIndex(item.name)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
