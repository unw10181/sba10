import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";

export default function Category() {
  const { name } = useParams();
  const { data, loading } = useFetch<any>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );

  if (loading) return <Spinner />;

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
