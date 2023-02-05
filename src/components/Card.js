import React from "react";
function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__item">
      <img
        src={card.link}
        className="elements__foto"
        alt={card.name}
        onClick={handleClick}
      />
      <button className="elements__icon-basket elements__icon-basket_hidden"></button>
      <div className="elements__info">
        <h2 className="elements__caption">{card.name}</h2>
        <div className="elements__like">
          <button className="elements__icon" type="button"></button>
          <p className="elements__counter-like">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
