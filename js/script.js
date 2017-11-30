/* TREEHOUSE TECHDEGREE FULL STACK JAVASCRIPT - PROJECT 1 - RANDOM QUOTE GENERATOR

What the program does: 
On button click, it displays a random quote to the user and changes the background to a new random RGB color. 
+ Category buttons can be used to filter the quotes. 
+ Quotes change automatically every 20 seconds 
+ Timer is reset every time the button is clicked. */

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// call the function every 20 seconds
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
let intervalID = setInterval(printQuote, 20000);

// toggle class "selected" when clicking on filter button
const filterButtons = document.getElementsByClassName('filter');
for (let i=0; i<filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    // if already selected: remove class
    if (filterButtons[i].classList.contains('selected')) {
      filterButtons[i].classList.remove("selected")
    }
    // if not already selected
    else {
      // remove class from other buttons
      for (let i=0; i<filterButtons.length; i++) {
        filterButtons[i].classList.remove("selected");
      }
      // add class to clicked button
      filterButtons[i].classList.add("selected");
    }
  })}

// create function that returns a random quote object
function getRandomQuote () {
  // return only Wisdom quotes if selected
  if (filterButtons[0].classList.contains('selected')) {
    const randomNum = Math.floor(Math.random() * 10);
    const wisdomArray = quotes.filter(function (el) {
      return (el.tags === "Wisdom");
    });
    return wisdomArray[randomNum];
  }
  // return only Motivational quotes if selected
  else if (filterButtons[1].classList.contains('selected')) {
    const randomNum = Math.floor(Math.random() * 10);
    const motivationalArray = quotes.filter(function (el) {
      return (el.tags === "Motivational");
    });
    return motivationalArray[randomNum];
  }
  // return only Humor quotes if selected
  else if (filterButtons[2].classList.contains('selected')) {
    const randomNum = Math.floor(Math.random() * 10);
    const humorArray = quotes.filter(function (el) {
      return (el.tags === "Humor");
    });
    return humorArray[randomNum];
  }
  // return any quote if not selected
  else {
    const randomNum = Math.floor(Math.random() * 30);
    return quotes[randomNum]
  }
}

// create "printQuote" function
function printQuote () {
  // print quote and source to the page
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
  // reset timer
  clearInterval(intervalID);
  intervalID = setInterval(printQuote, 20000);
}

