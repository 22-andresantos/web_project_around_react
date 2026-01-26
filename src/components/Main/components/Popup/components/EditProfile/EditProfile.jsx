import line_2 from "../../../../../../images/line_2.png";

export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="card-profile"
      id="edit-profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_profile-name"
          type="text"
          id="profile-name"
          name="profile-name"
          placeholder="Title"
          minlength="2"
          maxlength="40"
          required
        />

        <span className="popup__error" id="profile-name-error"></span>
      </label>

      <img className="popup__line-name" src={line_2} alt="Line Image" />

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_profile-job"
          type="text"
          id="profile-job"
          name="job"
          placeholder="Subtitle"
          minlength="2"
          maxlength="40"
          required
        />

        <span className="popup__error" id="profile-job-error"></span>
      </label>

      <img className="popup__line-about" src={line_2} alt="Line Image" />

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
