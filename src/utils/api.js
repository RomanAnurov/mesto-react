class Api {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  editUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  postNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  deleteCardApi(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  changeLikeCardStatus(_id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      method: !isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar `, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-56",
  headers: {
    authorization: "22bd7d89-efbc-47e6-b194-63dcf40cb6de",
    "Content-Type": "application/json",
  },
});

export default api;
