import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Hero from './Hero';
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');



    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/add-recipe`);



    };
  useEffect(() => {
    axios.get('http://localhost:8000/categories/')
    .then(response => setCategories(response.data))
    .catch(error => console.error('Error fetching categories:', error));


    axios.get('http://localhost:8000/recipes/')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

useEffect(() => {
        // Filter recipes based on selected category
        if (selectedCategory) {
            setFilteredRecipes(recipes.filter(recipe => recipe.category === selectedCategory));
        } else {
            setFilteredRecipes(recipes);
        }
    }, [selectedCategory, recipes]);
  
  
  

  return (
    <><Hero />
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://wallpapercave.com/wp/wp7224590.jpg')`, 
          }}><div className="container mx-auto px-4 py-8 ">

      <h2 className="text-3xl font-bold text-center mb-8 ">Our Blog</h2>
      <div className="flex flex-wrap justify-center">
        {recipes.map((rec, index) => (
          <Card key={index} id={rec.id} title={rec.title} image={rec.image} />
        ))}
      </div>
    </div>
    <button
          className="fixed bottom-4 right-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            onClick={handleSubmit} >
                <IoIosAddCircle />

            </button>
    </div></>
  );
};

export default RecipeList;
