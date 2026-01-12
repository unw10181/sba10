import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";

export default function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("query");
  const { data, loading } = useFetch<any>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (loading) return <Spinner />;
  if (!data.meals) return <p className="center">No results found.</p>;

  return (
    <div className="grid">
      {data.meals.map((meal: any) => (
        <RecipeCard
          key={meal.idMeal}
          id={meal.idMeal}
          title={meal.strMeal}
          image={meal.strMealThumb}
        />
      ))}
    </div>
  );
}
