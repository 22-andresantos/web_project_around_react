export default function Card(props) {
  const { name, link, isLiked, handleOpenPopup } = props.card;
  const imageComponent = () => {
    handleOpenPopup(imageComponent);
  };

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
