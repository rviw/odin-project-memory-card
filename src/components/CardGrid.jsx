import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/CardGrid.css";

function CardGrid({
  setCurrentScore,
  bestScore,
  setBestScore,
  clickedCharacterIds,
  setClickedCharacterIds,
}) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  function shuffleCharacters(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[index],
      ];
    }

    return shuffled;
  }

  function handleCardClick(characterId) {
    const isDuplicateClick = clickedCharacterIds.includes(characterId);

    if (isDuplicateClick) {
      setCurrentScore(0);
      setClickedCharacterIds([]);
    } else {
      const nextScore = clickedCharacterIds.length + 1;

      setCurrentScore(nextScore);
      setClickedCharacterIds((currentIds) => [...currentIds, characterId]);

      if (nextScore > bestScore) {
        setBestScore(nextScore);
      }
    }

    setCharacters((currentCharacters) => shuffleCharacters(currentCharacters));
  }

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

        setCharacters(shuffleCharacters(characterData));
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
          onClick={() => handleCardClick(character.id)}
        />
      ))}
    </section>
  );
}

export default CardGrid;
