import React from "react";
import Card from "./Card";

function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-update">
          <img
            src={props.userData.userAvatar}
            alt="аватарка"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__row">
            <h1 className="profile__title">{props.userData.userName}</h1>
            <button
              aria-label="Edit"
              className="profile__edit-button"
              onClick={props.onEditProfile}
              type="button"
            ></button>
          </div>
          <p className="profile__sub-title">{props.userData.userDescription}</p>
        </div>

        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
          type="button"
        ></button>
      </section>

      <section className="elements">
        
        {props.cards.map((card) => (
          <Card key={card._id} card={card}  onCardClick={props.onCardClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
