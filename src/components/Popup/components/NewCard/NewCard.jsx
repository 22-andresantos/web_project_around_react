import line_2 from "../../../../images/line_2.png";

export default function NewCard() {
  return (
    <div className="popup__container">
      <form
        className="popup__form "
        name="card-form"
        id="new-card-form"
        noValidate
      >
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_card-name"
            type="text"
            id="card-name"
            name="card-name"
            placeholder="Title"
            minlength="1"
            maxlength="30"
            required
          />

          <span className="popup__error" id="card-name-error"></span>
        </label>

        <img className="popup__line-name" src={line_2} alt="Line Image" />

        <label className="popup__field">
          <input
            className="popup__input popup__input_type_url"
            type="url"
            id="card__link"
            name="link"
            placeholder="image link"
            required
          />

          <span className="popup__error" id="card-link-error"></span>
        </label>

        <img className="popup__line-about" src={line_2} alt="Line Image" />

        <button className="button popup__button" type="submit">
          salvar
        </button>
      </form>
    </div>
  );
}
