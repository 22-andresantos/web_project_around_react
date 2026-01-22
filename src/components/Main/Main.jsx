import button_edit from "../../../src/images/button_edit.png";
import button_card from "../../../src/images/button_card.png";
import Avatar from "../../../src/images/avatar.png";

export default function Main() {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__overlay">
            <img src={Avatar} alt="Avatar Image" className="profile__image" />

            <img
              src={button_edit}
              alt="Button Edit Image"
              className="profile__image-edit"
            />
          </div>

          <div className="profile__info">
            <h2 className="profile__title">Jacques Cousteau</h2>

            <button className="button button__profile-open">
              <img
                className="button__profile-edit"
                src={button_edit}
                alt="Button Open"
              />
            </button>

            <h2 className="profile__subtitle">Explorador</h2>
          </div>

          <button className="button button__profile-add">
            <img
              className="button__profile-card"
              src={button_card}
              alt="Button Open Add Card"
            />
          </button>
        </section>

        {/* Apresentação dos cards   */}
        <div className="cards"></div>
      </main>
    </>
  );
}
