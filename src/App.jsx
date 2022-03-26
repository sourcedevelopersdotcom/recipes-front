import React, { useState } from "react";
import { API_ROOT } from './services/apiRoot'
import { RecipeList } from './components/RecipeList'
import './App.css';

const getData = async (search) => {
  var query = ''
  search.split(",").map(ingredient => {
    query = query.concat(`ingredients[]=${ingredient.trim()}&`)
  })
  query = query.slice(0, -1);
  const url = `${API_ROOT}/api/v1/recipes?${query}`;
  const response = await fetch(url).catch(() =>
    console.log("Can’t access " + url + " response.")
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
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
