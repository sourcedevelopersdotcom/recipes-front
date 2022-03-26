import React, { useState } from "react";
import { API_ROOT } from './services/apiRoot'
import './App.css';

const getData = async (search) => {
  var query = ''
  search.split(",").map(ingredient => {
    query = query.concat(`ingredients[]=${ingredient.trim()}&`)
  })
  query = query.slice(0, -1);
  const url = `${API_ROOT}/api/v1/recipes?${query}`;
  const response = await fetch(url).catch(() =>
    console.log("Can’t access " + url + " response. Blocked by browser?")
  );
  const json = await response.json();
  return json;
};

const useRecipeApi = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const results = await getData(query);
    setRecipes(results);
  };

  const doFetch = query => {
    if (!query == "") {
      fetchRecipes(query)
    }
  };
  return { recipes, doFetch };
};

const mapRecipes = (recipes) => {
  return recipes.map(recipe =>
    <li className='list-group-item'>{recipe}</li>
  )
}

function App() {
  const [ingredients, setIngredients] = useState("");
  const { recipes, doFetch } = useRecipeApi();

  return (
    <div className="App">
      <div className="Header">
        <h1 className="lead">Recipes by Ingredients Searcher</h1>
        <form
          onSubmit={e => {
            doFetch(ingredients);
            e.preventDefault();
          }}
        >
          <input
            placeholder="Add an ingredient to the search separated by commas. Example: sugar, vanilla"
            onChange={e => setIngredients(e.target.value)}
            value={ingredients}
            size="100"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
      <ul>
        {recipes && recipes.map(recipe => (
          <ul className='list-group'>
            <li className='list-group-item'>
              <h4>{recipe.title}</h4>
              <img src={recipe.image} alt={recipe.title} width="200" height="200"></img>
              <h5>Ratings:</h5>
              <p>{recipe.ratings}</p>
              <h5>Cook Time:</h5>
              <p>{recipe.cook_time}</p>
              <h5>Preparation Time:</h5>
              <p>{recipe.prep_time}</p>
              <h5>Category:</h5>
              <p>{recipe.category}</p>
              <h5>Author:</h5>
              <p>{recipe.author}</p>
              <h5>Ingredients:</h5>
              <ul className='list-group'>
                {mapRecipes(recipe.ingredients)}
              </ul>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default App;
