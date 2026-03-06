import { useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { name, link, likes } = props.card;
  const { card, handleOpenPopup, onCardLike, onCardDelete } = props;
  const imageComponent = { children: <ImagePopup card={props.card} /> };

  // Dados do usuário atual
  const currentUser = useContext(CurrentUserContext);

  // Verificar se o array de likes contém o ID do usuário atual
  const isLiked = likes && likes.some((like) => like._id === currentUser._id);
  const cardLikeButtonClassName = `button__like ${isLiked ? `button__like_active` : ""}`;

  // Deletar card
  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

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
        className={cardLikeButtonClassName}
        aria-label="Like Card"
        type="button"
        onClick={handleLikeClick}
      ></button>

      <button
        className="button__remove-card"
        aria-label="Remove Card"
        type="button"
        onClick={handleDeleteClick}
      ></button>
    </li>
  );
}
