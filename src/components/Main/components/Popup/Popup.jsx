import buttonCloseCard from "../../../../images/button_close.png";

export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <section className="popup">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button className="popup__close">
          <img
            src={buttonCloseCard}
            alt="Button close Image"
            className="popup__button-close"
            type="button"
            onClick={onClose}
          />
        </button>

        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </section>
  );
}
