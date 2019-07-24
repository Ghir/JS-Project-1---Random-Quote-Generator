document.querySelector('#loadQuote').addEventListener("click", printQuote, false);
let interval = setInterval(printQuote, 10000);
const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(button => button.addEventListener("click", () => {
  if (button.classList.contains('selected')) {
    button.classList.remove("selected");
  }
  else {
    filterButtons.forEach(button => button.classList.remove("selected"));
    button.classList.add("selected");
  }
}));

function getRandomQuote ()  {
  const selectedEl = document.querySelector('.selected');
  if (selectedEl) {
    const quotesArray = quotes.filter(quote => quote.tags === selectedEl.textContent);
    return quotesArray[Math.floor(Math.random() * 10)];
  }
  return quotes[Math.floor(Math.random() * 30)];
}

function printQuote () {
  const el = getRandomQuote();
  const paragraph = `
  <p class="quote"> ${el.quote} </p>
  <p class="source">  ${el.source} </p>
  `;
  document.querySelector('#quote-box').innerHTML = paragraph;
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  document.querySelector('body').style.backgroundColor = `rgb(${red},${green},${blue})`;
  clearInterval(interval);
  interval = setInterval(printQuote, 20000);
}
