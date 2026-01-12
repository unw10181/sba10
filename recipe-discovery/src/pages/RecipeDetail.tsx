import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";
import Spinner from "../components/Spinner";

export default function RecipeDetail() {
  const { id } = useParams();
  const { data, loading } = useFetch<any>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <Spinner />;

  const meal = data.meals[0];

  return (
    <div className="detail">
      <img src={meal.strMealThumb} />
      <h2>{meal.strMeal}</h2>
      <button
        onClick={() =>
          isFavorite(meal.idMeal)
            ? removeFavorite(meal.idMeal)
            : addFavorite(meal.idMeal)
        }
      >
        {isFavorite(meal.idMeal) ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <p>{meal.strInstructions}</p>
    </div>
  );
}
