import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const FullRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

     
     
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/update-recipe/${id}`);




    };
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
      
      const getCategoryName = (categoryId) => {
        switch (categoryId) {
            case 1:
                return "Italian";
            case 2:
                return "Main Course";
            case 3:
                return "Dessert";
            case 4:
                return "Beverage";
            case 5:
                return "Dessert";
            default:
                return "Unknown";
        }
    };

    const categoryName = getCategoryName(recipe.category);

      const baseUrl = 'http://127.0.0.1:8000/';  // Change to your backend URL
      const ingredientsList = recipe.ingredients.split(',');
      const instructionsList = recipe.instructions.split(/\d+\.\s/).filter(instruction => instruction.trim() !== '');
       

      return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/021/469/495/original/aesthetic-minimalist-boho-seamless-pattern-with-hand-drawn-dashes-in-mid-century-style-in-a-natural-color-palette-pastel-naive-nursery-print-design-on-a-light-background-trendy-kids-backdrop-vector.jpg')`, 
          }}>

        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto p-4 lg:p-8 ">
        <img className="w-full h-64 lg:h-96 object-cover mb-4 rounded-lg mb-4" src={`${baseUrl}${recipe.image}`} alt={recipe.title}  />
        <div className="bg-white shadow-md rounded-lg p-4 lg:p-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">{recipe.title}</h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-2">Ingredients</h2>
             <ul className="list-disc list-inside mb-4 text-sm md:text-base lg:text-lg">
                    {ingredientsList.map((ingredient, index) => (
                        <li key={index}>{ingredient.trim()}</li>
                    ))}
                </ul>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Instructions</h2>
             <ol className="list-decimal list-inside text-sm md:text-base lg:text-lg">
                    {instructionsList.map((instruction, index) => (
                        <li key={index} className="mb-2">{instruction.trim()}</li>
                    ))}
                </ol>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Category</h2>
                <p className="text-sm md:text-base lg:text-lg">{categoryName}</p>

        </div>
    </div>
    <button
          className="fixed bottom-4 right-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            onClick={handleSubmit} >
                <IoIosAddCircle />

            </button>
    </div>
      );
    };

export default FullRecipe
