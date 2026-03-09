import "../styles/Card.css";

function Card({ name, image, onClick }) {
  return (
    <button className="card" type="button" onClick={onClick}>
      <img className="card__image" src={image} alt={name} />
      <p className="card__name">{name}</p>
    </button>
  );
}

export default Card;
