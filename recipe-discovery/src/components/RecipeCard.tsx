import { Link } from "react-router-dom";

export default function RecipeCard({ id, title, image }: any) {
  return (
    <Link to={`/recipe/${id}`} className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}
