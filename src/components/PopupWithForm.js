function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_type_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button className="popup__close" onClick={props.onClose} type="button"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
          {props.children}
          <button className="popup__save" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
