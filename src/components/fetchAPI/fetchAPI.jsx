import "./NavBar.css";
import React, {useState} from "react";

export default function NavBar(props){

    const [enteredRecipe, setEnteredRecipe] = useState();

    const recipeChangeHandler = (event) =>{
        setEnteredRecipe(event.target.value);
    }

    const searchRecipeHandler = (event) =>{
        event.preventDefault();
        enteredRecipe && props.onChangeRecipe(enteredRecipe);
        setEnteredRecipe("");
    }


    return (
        <div className="navBar">
            <h1 className="navTitle">Recipes</h1>
            <form>
                <input type="text" id="recipeSearch" placeholder="Search Recipe" 
                     onChange={recipeChangeHandler}
                />
                <button onClick={searchRecipeHandler}>
                    <i className= "searchIcon fa-solid fa-magnifying-glass" ></i>
                </button>
                
            </form>
        </div>
    )
}
