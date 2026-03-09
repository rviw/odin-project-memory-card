import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/CardGrid.css";

function CardGrid() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const ids = [1, 4, 7, 25, 52, 54, 132, 133];

        const requests = ids.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
        );

        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map((r) => r.json()));

        const characterData = data.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.sprites.other["official-artwork"].front_default,
        }));

        setCharacters(characterData);
      } catch (error) {
        console.error("Failed to fetch characters", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="card-grid">
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </section>
  );
}

export default CardGrid;
