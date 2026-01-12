import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, loading, error } = useFetch<any>(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid">
      {data.categories.map((cat: any) => (
        <Link
          key={cat.idCategory}
          to={`/category/${cat.strCategory}`}
          className="card"
        >
          <img src={cat.strCategoryThumb} />
          <h3>{cat.strCategory}</h3>
        </Link>
      ))}
    </div>
  );
}
