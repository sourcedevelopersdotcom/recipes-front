
import React from 'react';

const mapRecipes = (recipes) => {
    return recipes.map(recipe =>
        <li className='list-group-item'>{recipe}</li>
    )
}

export const Recipe = ({ name, ingredients }) => {
    return (
        <>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <h4>{name}</h4>
                    <ul className='list-group'>
                        {mapRecipes(ingredients)}
                    </ul>
                </li>
            </ul>
            <br />
        </>
    )
}