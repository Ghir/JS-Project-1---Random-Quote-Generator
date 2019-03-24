// print a new quote on button click and every 10 seconds
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
let intervalID = setInterval(printQuote, 10000);

// toggle class selected on  filter buttons
const filterButtons = document.getElementsByClassName('filter');
for (let i=0; i<filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    if (filterButtons[i].classList.contains('selected')) {
      filterButtons[i].classList.remove("selected")
    }
    else {
      for (let i=0; i<filterButtons.length; i++) {
        filterButtons[i].classList.remove("selected");
      }
      filterButtons[i].classList.add("selected");
    }
  })}

function getRandomQuote () {
  // return only Wisdom quotes
  if (filterButtons[0].classList.contains('selected')) {
    const randomNum = Math.floor(Math.random() * 10);
    const wisdomArray = quotes.filter(function (el) {
      return (el.tags === "Wisdom");
    });
    return wisdomArray[randomNum];
  }
  // return only Motivational quotes
  else if (filterButtons[1].classList.contains('selected')) {
    const randomNum = Math.floor(Math.random() * 10);
    const motivationalArray = quotes.filter(function (el) {
      return (el.tags === "Motivational");
    });
    return motivationalArray[randomNum];
  }
  // return only Humor quotes
  else if (filterButtons[2].classList.contains('selected')) {
    const randomNum = Math.floor(Math.random() * 10);
    const humorArray = quotes.filter(function (el) {
      return (el.tags === "Humor");
    });
    return humorArray[randomNum];
  }
  // return any quote
  else {
    const randomNum = Math.floor(Math.random() * 30);
    return quotes[randomNum]
  }
}

function printQuote () {
  const quoteObject = getRandomQuote();
  const paragraph = `
  <p class="quote"> ${quoteObject.quote} </p>
  <p class="source">  ${quoteObject.source} </p>
  `;
  document.getElementById('quote-box').innerHTML = paragraph;
  // set random background
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${red},${green},${blue})`;
  clearInterval(intervalID);
  intervalID = setInterval(printQuote, 20000);
}

