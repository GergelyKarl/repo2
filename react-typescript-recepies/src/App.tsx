import React, { useState, useEffect, FormEvent } from "react";
import "./App.css";
import { IRecipe } from "./IRecipe";
import RecipeComponent from "./components/RecipeComponent"
function App() {
  const [recepiesFound, setRecepiesFound] = useState<IRecipe[]>([]);
  const [recepiesSearch, setRecepiesSearch] = useState("");

  const serchForRecepies = async (query: string): Promise<IRecipe[]> => {
    const result = await fetch(`http://localhost:3001?search=${query}`);

    return (await result.json()).results;
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recepiesSearch);
      if (query) {
        const respone = await serchForRecepies(query);
        setRecepiesFound(respone);
      }
    })();
  }, [recepiesSearch]);

  const inputHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const input = form.querySelector("#searchText") as HTMLInputElement;

    setRecepiesSearch(input.value);
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form onSubmit={(e) => inputHandle(e)}>
        <input type="text" id="searchText" />
        <button>Search</button>
      </form>
      {recepiesSearch && <p>Result for <span> {recepiesSearch}</span> ...</p>}

      <div className="recipeContainer">

        {recepiesFound.length && recepiesFound.map((recipe)=>(
          <RecipeComponent key={recipe.href} recipe={recipe}></RecipeComponent>
        ))}
      </div>
    </div>
  );
}

export default App;
