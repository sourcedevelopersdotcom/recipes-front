import React from 'react';
import { Recipe } from './Recipe'
import { API_ROOT } from '../services/apiRoot'

export class RecipeList extends React.Component {

    state = {
        recipes: []
    }

    mapRecipes = (recipes) => {
        return recipes.map(recipe => <Recipe key={recipe.title} name={recipe.title} ingredients={recipe.ingredients} />)
    }

    fetchRecipes = () => {
        fetch(`${API_ROOT}/api/v1/recipes?ingredients[]=sugar&ingredients[]=vanilla`)
            .then(response => response.json())
            .then(recipes => this.setState({ ...this.state, recipes: recipes }))
    }

    componentDidMount() {
        this.fetchRecipes()
    }

    render() {
        return (
            <>
                <h1>Recipes</h1>
                <br />
                {this.mapRecipes(this.state.recipes)}
            </>
        )
    }
}