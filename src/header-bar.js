/* eslint no-unused-vars: 0 */
import React, { useState, useContext, useEffect } from "react";
import AppContext from "./context";

export default () => {
  const { actions, shoppingCart, totalCartPrice, products } =
    useContext(AppContext);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    actions.filterProductsByName(input);
  }, [input]);

  return (
    <>
      <input
        type="text"
        name="input"
        autoComplete="off"
        value={input}
        onChange={(e) => handleChange(e)}
        style={{ height: "1.5rem", width: "20rem", marginTop: "1rem" }}
      />
      <p> Total: $ {totalCartPrice}</p>
    </>
  );
};
