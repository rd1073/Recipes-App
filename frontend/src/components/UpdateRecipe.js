import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';




const UpdateRecipe = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
   const [image, setImage] = useState(null);
   const { id } = useParams();
   const [initialRecipe, setInitialRecipe] = useState({});

 
   useEffect(() => {
    // Fetch the existing recipe details
    axios.get(`http://localhost:8000/recipes/${id}/`)
        .then(response => {
            const recipe = response.data;
            setInitialRecipe(recipe);
            setTitle(recipe.title);
            setIngredients(recipe.ingredients);
            setInstructions(recipe.instructions);
             setImage(recipe.image); // If you want to show the existing image
        });
        
}, [id]);


const handleDelete = (e) => {
    e.preventDefault();

    axios.delete(`http://localhost:8000/recipes/${id}/`)
      .then(response => {
        console.log('Recipe deleted successfully:', response.data);
        navigate('/'); // Redirect to home or any desired route after deletion
      })
      .catch(error => console.error('Error deleting recipe:', error));
    }


 
   const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object to handle file upload
    const formData = new FormData();
    if (title) formData.append('title', title);
    if (ingredients) formData.append('ingredients', ingredients);
    if (instructions) formData.append('instructions', instructions);
    if (image instanceof File) {
        formData.append('image', image);
      }
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

    axios.put(`http://127.0.0.1:8000/recipes/${id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
          
    })
    .then(response => {
        console.log('Recipe updated:', response.data);
        navigate(`/full-recipe/${id}`);
      })
        .catch(error => console.log(error));
};


  return (
    <div className=" bg-cover bg-center" style={{ backgroundImage: `url('https://i.etsystatic.com/37444368/r/il/ba6eda/4490987468/il_570xN.4490987468_g50i.jpg')`, 
    }}>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 bg-white rounded-lg p-8 shadow-md">

       <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
        />
      </div>
       
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Image
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update
      </button>
      <br />
      <br />
      <button
        onClick={handleDelete}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
    </form>
    </div>
    
  );
};

export default UpdateRecipe;
