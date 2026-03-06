import button_edit from "../../images/button_avatar.png";
import button_card from "../../images/button_card.png";
import Popup from "../Main/components/Popup/Popup.jsx";
import NewCard from "../Main/components/Popup/components/NewCard/NewCard.jsx";
import EditAvatar from "../Main/components/Popup/components/EditAvatar/EditAvatar.jsx";
import EditProfile from "../Main/components/Popup/components/EditProfile/EditProfile.jsx";
import Card from "../Main/components/Card/Card.jsx";
import { useState, useEffect, useContext } from "react";
import { api } from "../../utils/api.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

export default function Main() {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const newEditAvatar = { title: "Edit Avatar", children: <EditAvatar /> };
  const newEditProfile = { title: "Edit Profile", children: <EditProfile /> };

  // buscando na api os cards iniciais
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Erro dos dados do usuário: ${err}`);
      });
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;

    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    // .map cria um novo array.
    // Se o ID for o mesmo do card clicado, substituímos pelo novo que veio da API.
    // Se não, mantemos o card atual da lista.
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((error) => console.error(error));
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__overlay">
          <img
            onClick={() => handleOpenPopup(newEditAvatar)}
            src={currentUser.avatar}
            alt="Avatar Image"
            className="profile__image"
          />

          <img
            src={button_edit}
            alt="Button Edit Image"
            className="profile__image-edit"
            type="button"
          />
        </div>

        <div className="profile__info">
          <h2 className="profile__title">{currentUser.name}</h2>

          <button
            onClick={() => handleOpenPopup(newEditProfile)}
            className=" button__profile-open"
          >
            <img
              className="button__profile-edit"
              src={button_edit}
              alt="Button Open"
              type="button"
            />
          </button>

          <h2 className="profile__subtitle">{currentUser.about}</h2>
        </div>

        <button
          onClick={() => handleOpenPopup(newCardPopup)}
          className="button__profile-add"
        >
          <img
            className="button__profile-card"
            src={button_card}
            alt="Button Open Add Card"
            type="button"
          />
        </button>
      </section>

      {/* Apresentação dos cards   */}
      <ul className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={handleOpenPopup} /*função abrir imagem*/
            onCardLike={handleCardLike} /* função Like no card*/
            onCardDelete={handleCardDelete} /* função deletar card*/
          />
        ))}
      </ul>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
