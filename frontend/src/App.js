import logo from './logo.svg';
import './App.css';
import RecipeList from './components/RecipesList';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
 import Hero from './components/Hero';
import FullRecipe from './components/FullRecipe';
import AddRecipe from './components/AddRecipe';
import UpdateRecipe from './components/UpdateRecipe';

function App() {
  return (
    <Router>
       <div className="App">
           

        <Routes>
          <Route path="/" element={<RecipeList/>} />
          <Route path="/add-recipe" element={<AddRecipe/>} />
          <Route path="/update-recipe/:id" element={<UpdateRecipe/>} />

          <Route path="/full-recipe/:id" element={<FullRecipe/>} />

          


          
           
</Routes>
 
   
      
    </div>
    </Router>
  );
}

export default App;
