// src/components/RecipeForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeForm = ({ recipeId, onSuccess }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/categories/')
            .then(response => setCategories(response.data));

        
                
    }, [recipeId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipe = { title, ingredients, instructions, category };
        
        
        axios.post('http://localhost:8000/recipes/', recipe)
                .then(() => onSuccess())
                .catch(error => console.error(error));
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
            </div>
            <div>
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit" >Recipe</button>
        </form>
    );
};

export default RecipeForm;
