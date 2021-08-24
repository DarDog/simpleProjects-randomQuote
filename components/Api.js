export default class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }


  getQuote () {
    return fetch(`${this._baseUrl}/random`)
        .then((res) => {
          return this._getResponseData(res)
        })
  }


  _getResponseData(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
}