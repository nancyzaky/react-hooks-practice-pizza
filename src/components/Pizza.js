import React from "react";

function Pizza({ pizza, val, setVal, setIndex }) {
  const { id, size, topping, vegetarian } = pizza;
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setVal(topping);
            setIndex(id);
          }}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
