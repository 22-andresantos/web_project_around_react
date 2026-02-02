import button_edit from "../../images/button_avatar.png";
import button_card from "../../images/button_card.png";
import Avatar from "../../images/avatar.png";
import Popup from "../Main/components/Popup/Popup.jsx";
import NewCard from "../Main/components/Popup/components/NewCard/NewCard.jsx";
import EditAvatar from "../Main/components/Popup/components/EditAvatar/EditAvatar.jsx";
import EditProfile from "../Main/components/Popup/components/EditProfile/EditProfile.jsx";
import Card from "../Main/components/Card/Card.jsx";
import { useState } from "react";
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "New card", children: <NewCard /> };
  const newEditAvatar = { title: "Edit Avatar", children: <EditAvatar /> };
  const newEditProfile = { title: "Edit Profile", children: <EditProfile /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__overlay">
          <img
            onClick={() => handleOpenPopup(newEditAvatar)}
            src={Avatar}
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
          <h2 className="profile__title">Jacques Cousteau</h2>

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

          <h2 className="profile__subtitle">Explorador</h2>
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
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
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
