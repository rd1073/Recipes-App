import logo from './logo.svg';
import './App.css';
import RecipeList from './components/RecipesList';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import Hero from './components/Hero';
import FullRecipe from './components/FullRecipe';

function App() {
  return (
    <Router>
       <div className="App">
           

        <Routes>
          <Route path="/" element={<RecipeList/>} />
          <Route path="/add-recipe" element={<RecipeForm/>} />
          <Route path="/full-recipe/:id" element={<FullRecipe/>} />

          


          
           
</Routes>
 
   
      
    </div>
    </Router>
  );
}

export default App;
