import React from 'react';

const mapIngredients = (ingredients) => {
    return ingredients.map(ingredient =>
        <li className='list-group-item'>{ingredient}</li>
    )
}

export const Recipe = ({ recipe }) => {
    const { title, image, ratings, cook_time, prep_time, category, author, ingredients } = recipe
    return (
        <>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <h4>{title}</h4>
                    <img src={image} alt={title} width="200" height="200"></img>
                    <h5>Ratings:</h5>
                    <p>{ratings}</p>
                    <h5>Cook Time:</h5>
                    <p>{cook_time}</p>
                    <h5>Preparation Time:</h5>
                    <p>{prep_time}</p>
                    <h5>Category:</h5>
                    <p>{category}</p>
                    <h5>Author:</h5>
                    <p>{author}</p>
                    <h5>Ingredients:</h5>
                    <ul className='list-group'>
                        {mapIngredients(ingredients)}
                    </ul>
                </li>
            </ul>
            <br />
        </>
    )
}