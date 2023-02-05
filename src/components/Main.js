import React from "react";
import Card from "./Card";

function Main({userData, onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-update">
          <img
            src={userData.userAvatar}
            alt="аватарка"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit"
            onClick={onEditAvatar}
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__row">
            <h1 className="profile__title">{userData.userName}</h1>
            <button
              aria-label="Edit"
              className="profile__edit-button"
              onClick={onEditProfile}
              type="button"
            ></button>
          </div>
          <p className="profile__sub-title">{userData.userDescription}</p>
        </div>

        <button
          className="profile__add-button"
          onClick={onAddPlace}
          type="button"
        ></button>
      </section>

      <section className="elements">
        
        {cards.map((card) => (
          <Card key={card._id} card={card}  onCardClick={onCardClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
