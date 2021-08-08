import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [val, setVal] = useState("");
  const [index, setIndex] = useState(0);

  const fetchUrl = () => {
    fetch("http://localhost:3001/pizzas")
      .then((resp) => resp.json())
      .then((data) => {
        setPizzas(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <>
      <Header />
      <PizzaForm
        val={val}
        setVal={setVal}
        setIndex={setIndex}
        index={index}
        setPizzas={setPizzas}
      />
      <PizzaList
        pizzas={pizzas}
        setPizzas={setPizzas}
        val={val}
        setVal={setVal}
        setIndex={setIndex}
      />
    </>
  );
}

export default App;
