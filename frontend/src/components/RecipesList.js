import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:8000/recipes/')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  

  return (
    <div>
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Ingridients</th>
            <th>Instructions</th>
            <th>Category</th>
             </tr>
        </thead>
        <tbody>
            {recipes.map((rec) =>
            <tr key={rec.id}>
                <td>{rec.title}</td>
                <td>{rec.ingredients}</td>
                <td>{rec.instructions}</td>
                <td>{rec.category}</td>
                
            </tr>)}
        </tbody>
    </table>
      
       
    </div>
  );
};

export default RecipeList;
