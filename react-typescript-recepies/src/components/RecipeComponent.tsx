import React from "react";
import { IRecipe } from "../IRecipe";

const RecipeComponent = (props: { recipe: IRecipe }) => {
  const { recipe } = props;

  return (
    <div className="recipe">
      <div className="title">
        <img
          src={recipe.thumbnail || "http://localhost:3000/placeholder.jpg"}
          alt={recipe.title}
        />
        <p>{recipe.title}</p>
      </div>
      {recipe.indrigents && (
        <ul>
          {recipe.indrigents.split(",").map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      )}

      <a href={recipe.href} target="_blank">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeComponent;
