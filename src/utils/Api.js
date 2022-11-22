class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  inCome() {
    return fetch(`${this._baseUrl}/income`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  mailDeliteList() { // update basket при монтировании
    return fetch(`${this._baseUrl}/delitelist`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getSendList() { // update send при монтировании
    return fetch(`${this._baseUrl}/sendlist`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getDraftList() { // update draft при монтировании
    return fetch(`${this._baseUrl}/draftlist`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  postMailDelite(mail, path) {
    return fetch(`${this._baseUrl}/delite`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        id: mail.id,
        theme: mail.theme,
        message: mail.message,
        sender: mail.sender,
        address: mail.address,
        file: mail.file,
        path: path,
      }),
    }).then(this._checkResponse);
  }

  postMailSend(listMail) {
    return fetch(`${this._baseUrl}/send`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        list: listMail,
      }),
    }).then(this._checkResponse);
  }

  postMailDraft(draftMail) {
    return fetch(`${this._baseUrl}/draft`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        id: draftMail.id,
        theme: draftMail.theme,
        message: draftMail.message,
        sender: draftMail.sender,
        address: draftMail.address,
        file: draftMail.file,
      }),
    }).then(this._checkResponse);
  }

  putUpdate() {
    return fetch(`${this._baseUrl}/update`, {
      headers: this._headers,
      method: "PUT",
      body: JSON.stringify({
        update: true,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: `http://localhost:3000`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
