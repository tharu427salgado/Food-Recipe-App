import { useState,useEffect} from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
import RecipeCard from "./Components/RecipeCard";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

function App() {
  const [isLoading,setIsLoading] = useState(false);
  const [querry,setQuerry] = useState("");
  const [recipes,setRecipes] = useState ([]);

  // function to search for the recipes

  const searchRecipes = async() => {
    setIsLoading(true);
    const url = apiUrl + querry;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);

  }
  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = event =>{
    event.preventDefault()
    searchRecipes()
  }

  return (
    <div className="Container">
      <h2>Our Recipe App</h2>
      <SearchBar
      handleSubmit={handleSubmit}
      value={querry}
      onChange={event => setQuerry(event.target.value)}
      isLoading={isLoading}

      />
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
          : "No Recipes!"}

      </div>
    </div>
  );
}

export default App;
