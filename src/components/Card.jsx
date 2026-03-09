import "../styles/Card.css";

function Card() {
  return (
    <button className="card" type="button">
      <img className="card__image" />
      <p className="card__name">name</p>
    </button>
  );
}

export default Card;
