import Quote from "../components/Quote.js";
import API from "../components/Api.js";

const baseUrl = 'https://api.quotable.io',
    containerSelector = '.quotes-container',
    generateButton = document.querySelector('.button')

const api = new API(baseUrl);
const quote = new Quote(containerSelector)

const getQuote = () => {
  api.getQuote()
      .then((data) => {
        quote.setQuote(data)
      })
      .catch((err) => {
        console.log(err)
      })
}

generateButton.addEventListener('click', getQuote)
