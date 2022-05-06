import React from "react";
import ProductCards from "../components/ProductCards";
import { useState, useEffect } from "react";

function Home() {
  const [name, setName] = useState("");
  const [count, setCount] = useState("1");

  function search(name, count) {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${name}&number=${count}&apiKey=b36f35317b8f475d81b392c7e6599dfe`
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodCard(data.recipes);
      })
      .catch((eror) => console.log(eror));
  }

  const [FoodCard, setFoodCard] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?number=6&apiKey=b36f35317b8f475d81b392c7e6599dfe"
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodCard(data.recipes);
      })
      .catch((eror) => console.log(eror));
  }, []);

  return (
    <div className="d-flex container justify-content-evenly flex-wrap ">
      <div className="d-felx">
        <form action="">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Recipes"
            className="input mx-2"
          />
          <input
            value={count}
            onChange={(event) => setCount(event.target.value)}
            type="number"
            className="input"
            placeholder="Count Of Recipes"
          />
          <button className="btn-search mx-2" onClick={search}>
            search
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-evenly flex-wrap">
      {FoodCard.map((item) => (
        <ProductCards
          key={item.id}
          title={item.title}
          image={item.image}
          ShortDescribe={item.creditsText}
          Describe={item.dishTypes}
        />
      ))}</div>
    </div>
  );
}

export default Home;
