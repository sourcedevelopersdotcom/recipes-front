
import React from 'react';

const mapRecipes = (recipes) => {
    return recipes.map(recipe =>
        <li className='list-group-item'>{recipe}</li>
    )
}

export const Recipe = ({ recipe }) => {
    return (
        <>
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
            <br />
        </>
    )
}