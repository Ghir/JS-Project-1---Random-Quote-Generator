// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "change" function is called
document.getElementById('loadQuote').addEventListener("click", change, false);

function change () {
  printQuote ();
  changeBackground ()
}

const quotes = [{
  quote: "Be the change that you wish to see in the world",
  source: "Mahatma Gandhi",
  tags: "Wisdom"
  },{
  quote: "Everything you can imagine is real.",
  source: "Pablo Picasso",
  tags: "Inspirational"
  },{
  quote: "Life isn't about finding yourself. Life is about creating yourself.",
  source: "George Bernard Shaw",
  tags: "Inspirational"
  },{
  quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  source: "Winston S. Churchill",
  tags: "Motivational"
  },{
  quote: "We are addicted to our thoughts. We cannot change anything if we cannot change our thinking.",
  source: "Santosh Kalwar",
  tags: "Wisdom"
  },{
  quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
  source: "Isaac Asimov",
  tags: "Science"
  },{
  quote: "No one can grow if he does not accept his smallness.",
  source: "Pope Francis",
  tags: "Life"
  },{
  quote: "Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.",
  source: "Walter Cronkite",
  tags: "Education"
  },{
  quote: "The past has no power over the present moment.",
  source: "Eckhart Tolle",
  tags: "Wisdom"
  },{
  quote: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
  source: "Dalai Lama",
  tags: "Love"
  },{
  quote: "Your up and down emotions are like clouds in the sky, beyond them, the real, basic human nature is clear and pure.",
  source: "Lama Zopa Rinpoche",
  tags: "Happiness"
  }
]

// Create function that returns a random quote quote object

function getRandomQuote () {
  const randomNum = Math.floor(Math.random() * 11);
  return quotes[randomNum];
}

// Print quote and source to the page

function printQuote () {
  const quoteObject = getRandomQuote();
  const paragraph = `
  <p class="quote"> ${quoteObject.quote} </p>
  <p class="source">  ${quoteObject.source} </p>
  `;
  document.getElementById('quote-box').innerHTML = paragraph;
}

// Set random background when quote changes

function changeBackground () {
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${red},${green},${blue})`;
}

 // Change on delay

 var intervalID = window.setInterval(change, 8000);
