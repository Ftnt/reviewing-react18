import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await response.json();
      setLoading(false);
      setCharacters(results);
    }
    fetchData();
  }, [page]);

  return (
    <section className="max-w-5xl m-auto">
      <NavPage page={page} setPage={setPage} />
      <div className="grid grid-cols-3 gap-10 gap-x-24">
        {loading ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <Character character={character} key={character.id} />
          ))
        )}
      </div>
      <NavPage page={page} setPage={setPage} />
    </section>
  );
}

export default CharacterList;
