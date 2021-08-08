import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, setPizzas, val, setVal, setIndex }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza) => {
          const { id, topping, vegetarian, size } = pizza;
          return (
            <Pizza
              key={id}
              pizza={pizza}
              val={val}
              setVal={setVal}
              setIndex={setIndex}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default PizzaList;
