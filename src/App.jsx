import Header from "./components/Header.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import CardGrid from "./components/CardGrid.jsx";
import "./styles/App.css";

function App() {
  return (
    <main className="app">
      <Header />
      <Scoreboard />
      <CardGrid />
    </main>
  );
}

export default App;
