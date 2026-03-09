import { useState } from "react";
import Header from "./components/Header.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import CardGrid from "./components/CardGrid.jsx";
import "./styles/App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCharacterIds, setClickedCharacterIds] = useState([]);

  return (
    <main className="app">
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardGrid
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        clickedCharacterIds={clickedCharacterIds}
        setClickedCharacterIds={setClickedCharacterIds}
      />
    </main>
  );
}

export default App;
