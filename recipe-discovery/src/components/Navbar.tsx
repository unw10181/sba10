import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${query}`);
    setQuery("");
  }

  return (
    <nav>
      <Link to="/">Recipe App</Link>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes"
        />
      </form>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}
