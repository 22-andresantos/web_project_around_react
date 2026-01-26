export default function ImagePopup(props) {
  const { name, link } = props.card;

  return (
    <li className="card">
      <img className="card__img" src={link} alt="Card Image" />

      <h2 className="card__title">{name}</h2>
    </li>
  );
}
