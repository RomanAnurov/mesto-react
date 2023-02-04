function PopupImage(props) {
  return (
    <div className={`popup popup_type_image-open ${props.card ? "popup_type_opened" : ''}`}>

        <div className="popup__container-image">
          <img className="popup__image" src={props.card ? props.card.link : '#'}  />
          <button className="popup__close"  type="button" onClick={props.onClose}></button>
          <h2 className="popup__caption"> {props.card ? props.card.name : ''}</h2>
        </div>
      </div>
  )
}

export default PopupImage;