import "../styles/Card.css";

function Card({ name, image }) {
  return (
    <button className="card" type="button">
      <img className="card__image" src={image} alt={name} />
      <p className="card__name">{name}</p>
    </button>
  );
}

export default Card;
