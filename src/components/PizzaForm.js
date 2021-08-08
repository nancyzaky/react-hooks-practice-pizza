import React, { useState } from "react";

function PizzaForm({ val, setVal, index, setIndex, setPizzas }) {
  const [size, setSize] = useState("");
  const [veg, setVeg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      topping: val,
      size: size,
      vegetarian: veg === "vegetarian" ? "true" : "false",
    };
    fetch(`http://localhost:3001/pizzas/${index}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newObj),
    });
    fetch("http://localhost:3001/pizzas")
      .then((resp) => resp.json())
      .then((data) => {
        setPizzas(data);
      });
    setIndex(0);
    setSize(null);
    setVal("");
    setVeg(null);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={val}
            onChange={(e) => {
              return setVal(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={(e) => {
                setVeg(e.target.value);
              }}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={(e) => {
                setVeg(e.target.value);
              }}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
