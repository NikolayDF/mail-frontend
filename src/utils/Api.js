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

  postMailDelite(mail) {
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
