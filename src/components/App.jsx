import { useState, useEffect } from "react";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  // carregar dados do User
  useEffect(() => {
    (async () => {
      await api
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(`Erro dos dados do usuário: ${err}`);
        });
    })();
  }, []);

  // carregar dados dos Cards
  useEffect(() => {
    (async () => {
      await api
        .getInitialCards()
        .then((data) => {
          setCards(data);
        })
        .catch((err) => {
          console.log(`Erro dos dados dos cards: ${err}`);
        });
    })();
  }, []);

  // like ou dislike o card
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
        const newCards = cards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard,
        );
        setCards(newCards);
      })
      .catch((error) => console.error(error));
  }

  // deletar o card
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((error) => console.error(error));
  }

  // manipulador para adicionar Card
  const handleAddPlaceSubmit = (newCardData) => {
    api
      .addNewCard(newCardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  // Solicitar via API nome e sobre mim e atualizar o estado do usuário atual
  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .updateUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((err) => {
          console.log(`Erro ao atualizar os dados do usuário: ${err}`);
        });
    })();
  };

  // solicitar via API o link do avatar e atualizar o estado do usuário atual
  const handleUpdateAvatar = (data) => {
    api
      .updateAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => console.error(`Erro: ${err}`));
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page">
        <Header />

        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
