import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupImage from "./PopupImage";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({
    userName: "",
    userDescription: "",
    userAvatar: "",
  });
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);
  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  React.useEffect(() => {
    api
      .getInfo()
      .then((data) => {
        setUserData({
          ...userData,
          userName: data.name,
          userDescription: data.about,
          userAvatar: data.avatar,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        userData={userData}
        cards={cards}
        onCardClick={handleCardClick}
      />

      <Footer />

      {/*Попап Профиля*/}

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="editProfile"
        title="Редактировать профиль"
        buttonText="Сохранить"
      >
        <>
          <input
            id="user-name"
            className="popup__input popup__input_type_user-name"
            type="text"
            name="name"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="user-name-error popup__input-error"></span>
          <input
            id="about"
            className="popup__input popup__input_type_user-about"
            type="text"
            name="about"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="about-error popup__input-error">
            Необходимо заполнить данное поле
          </span>
        </>
      </PopupWithForm>

      {/*Попап Добавления карточки*/}

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="addCard"
        title="Новое место"
        buttonText="Создать"
      >
        <>
          <input
            id="card-name"
            className="popup__input popup__input_type_card-name"
            type="text"
            name="name"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="card-name-error popup__input-error"></span>
          <input
            id="url"
            className="popup__input popup__input_type_card-url"
            type="url"
            name="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="url-error popup__input-error"></span>
        </>
      </PopupWithForm>

      {/*Попап Подтверждения удаления*/}

      <PopupWithForm
        onClose={closeAllPopups}
        name="confirmDelete"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>

      {/*Попап Редактирования Аватара*/}

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="editAvatar"
        title="Обновить аватар"
        buttonText="Сохранить"
      >
        <>
          <input
            id="avatar"
            className="popup__input popup__input_type_avatar-url"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="avatar-error popup__input-error"></span>
        </>
      </PopupWithForm>
      <PopupImage card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
