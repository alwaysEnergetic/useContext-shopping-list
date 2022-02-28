/* eslint no-unused-vars: 0 */
import React, { useContext, useEffect } from "react";
import AppContext from "./context";

export default () => {
  const [input, setInput] = React.useState("");
  const { actions, totalCartPrice } = useContext(AppContext);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    actions.filterProductsByName(input);
  }, [input]);

  return (
    <div className="header-bar">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        style={{ width: 600, height: 30 }}
      />
      <p style={{ display: "flex", alignitems: "center" }}>
        {" "}
        Total: $ {totalCartPrice}{" "}
      </p>
    </div>
  );
};
