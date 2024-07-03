import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Hero from './Hero';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:8000/recipes/')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  

  

  return (
    <><Hero /><div className="container mx-auto px-4 py-8">

      <h2 className="text-3xl font-bold text-center mb-8">Our Blog</h2>
      <div className="flex flex-wrap justify-center">
        {recipes.map((rec, index) => (
          <Card key={index} id={rec.id} title={rec.title} image={rec.image} />
        ))}
      </div>
    </div></>
  );
};

export default RecipeList;
