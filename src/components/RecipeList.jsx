import React from 'react';
import { Recipe } from './Recipe'

const mapRecipes = (recipes) => {
    return recipes.map(recipe => <Recipe key={recipe.title} recipe={recipe} />)
}


export const RecipeList = ({ recipes }) => {
    return (
        <ul>
            {recipes && mapRecipes(recipes)}
        </ul>
    )
}