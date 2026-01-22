import line_2 from "../../../../../../images/line_2.svg";

export default function EditAvatar() {
  return (
    <div class="popup__container">
      <h2 class="popup__title">Atualizar Avatar</h2>

      <form class="popup__form" name="avatar" id="edit-avatar-form" noValidate>
        <label class="popup__field">
          <input
            class="popup__input popup__input_type_avatar-url"
            type="url"
            id="avatar__url"
            name="avatar-url"
            placeholder="Image url"
            required
          />

          <span class="popup__error" id="avatar-url-error"></span>

          <img class="popup__line-about" src={line_2} alt="Line Image" />

          <button class="button popup__button" type="submit" disabled>
            Salvar
          </button>
        </label>
      </form>
    </div>
  );
}
