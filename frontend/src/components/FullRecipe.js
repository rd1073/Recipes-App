import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

     
    useEffect(() => {
        // Fetch the recipe details from the server
        axios.get(`http://127.0.0.1:8000/recipes/${id}/`)
          .then((response) => {
            setRecipe(response.data);
          })
          .catch((error) => console.error('Error fetching recipe:', error));
      }, [id]);

      if (!recipe) {
        return <div>Loading...</div>;
      }

      const baseUrl = 'http://127.0.0.1:8000/';  // Change to your backend URL


      return (
        <div className="max-w-4xl mx-auto p-4">
          <img className="w-full h-64 object-cover mb-4" src={`${baseUrl}${recipe.image}`} alt={recipe.title} />
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <p className="mb-4">{recipe.ingredients}</p>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p>{recipe.instructions}</p>
        </div>
      );
    };

export default FullRecipe
