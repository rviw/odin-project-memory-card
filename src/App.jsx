import { useState } from "react";
import Header from "./components/Header.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import CardGrid from "./components/CardGrid.jsx";
import "./styles/App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <main className="app">
      <Header />
      <Scoreboard currentScore={currentScore} />
      <CardGrid setCurrentScore={setCurrentScore} />
    </main>
  );
}

export default App;
