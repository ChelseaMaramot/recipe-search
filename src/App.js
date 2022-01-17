import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import Card from "./components/UI/card/Card";
import FetchAPI from "./components/fetchAPI/FetchAPI";
import React, { useState } from "react";
import Modal from "./components/UI/modal/Modal";

function App() {

  const [enteredRecipe, setEnteredRecipe] = useState();
  const [data, setData] = useState();

  const recipeHandler = (recipe) => {
    setEnteredRecipe(recipe);
  }

  return (
    <div>
      <NavBar
        onChangeRecipe={recipeHandler}
      ></NavBar>
      <FetchAPI
        recipe={enteredRecipe}
      ></FetchAPI>


    </div>
  );
}

export default App;
