import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { name, link } = props.card;
  const { handleOpenPopup } = props;
  const imageComponent = { children: <ImagePopup card={props.card} /> };

  return (
    <li className="card">
      <img
        className="card__img"
        src={link}
        alt="Card Image"
        onClick={() => handleOpenPopup(imageComponent)}
      />

      <h2 className="card__title">{name}</h2>

      <button
        className="button__like"
        aria-label="Like Card"
        type="button"
      ></button>

      <button
        className="button__remove-card"
        aria-label="Remove Card"
        type="button"
      ></button>
    </li>
  );
}
