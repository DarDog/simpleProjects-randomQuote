export default class Quote {
  constructor(containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._quote = this._container.querySelector('.quote');
    this._author = this._container.querySelector('.quote__author');
  }


  setQuote(data) {
    this._quote.textContent = data.content
    this._author.textContent = data.author
  }

}