import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p className="center">No favorites yet. Start exploring!</p>;
  }

  return (
    <div className="grid">
      {favorites.map((id) => (
        <RecipeCard
          key={id}
          id={id}
          title={`Recipe ${id}`}
          image={`https://www.themealdb.com/images/media/meals/${id}.jpg`}
        />
      ))}
    </div>
  );
}
