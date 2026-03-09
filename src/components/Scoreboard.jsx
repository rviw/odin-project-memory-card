import "../styles/Scoreboard.css";

function Scoreboard({ currentScore }) {
  return (
    <section className="scoreboard">
      <div className="scoreboard__item">
        <span className="scoreboard__label">Score</span>
        <span className="scoreboard__value">{currentScore}</span>
      </div>
      <div className="scoreboard__item">
        <span className="scoreboard__label">Best</span>
        <span className="scoreboard__value">0</span>
      </div>
    </section>
  );
}

export default Scoreboard;
