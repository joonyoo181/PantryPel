import React from 'react';
import FavTextBox from './FavoriteTextBox';

const Favorites = () => {
  const handleRecipeClick = (recipeId) => {};

  const savedRecipes = [
    { id: 1, title: 'Spaghetti Carbonara' },
    { id: 2, title: 'Chicken Alfredo' },
    { id: 3, title: 'Carne Asada Tacos' },
    { id: 4, title: 'Mashed Potatoes' },
  ];

  return (
    <div style={{ padding: '20px', justifyItems: 'center'}}>
      <h1>Saved Recipes</h1>
      <div> 
        {savedRecipes.map((recipe) => (
          <FavTextBox
            key={recipe.id} 
            title={recipe.title} 
            onClick={() => handleRecipeClick(recipe.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
