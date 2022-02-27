/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * holds all quotes along with the author and if avalible the sorce and year
***/


// quotes gathered from https://en.wikiquote.org/wiki
const quotes = [
  {
    quote : "I don't think that success has got anything to do with money",
    author : "Martin Bell",
    source : "Reflections of Success",
    year : "1997",
    tag : "Success"
  },
  {
    quote : "Successful people don't have fewer problems. They have determined that nothing will stop them from going forward.",
    author : "Ben Carson",
    source : "Gifted Hands: The Ben Carson Story",
    year : "1996",
    tag : "Success"
  },
  {
    quote : "Try not to become a man of success. Rather become a man of value.",
    author : "Albert Einstein",
    source : "Einstein and teh Poet",
    year : "1983",
    tag : "Success"
  },
  {
    quote : "If one cannot have success, the next most agreeable thing is failure.",
    author : "Jean Ingelow",
    source : "His Thoughts and Ways",
    year : "1886",
    tag : "Success"
  },
  {
    quote : "People become really quite remarkable when they start thinking that they can do things. When they believe in themselves they have the first secret of success.",
    author : "Norman Vincent Peale",
    source : "Positive Thinking Every Day: An Inspiratino for Each Day of the Year",
    year : "1993",
    tag : "Success"
  },
  {
    quote : "The secret of success is constancy of purpose.",
    author : "Benjamin Disraeli",
    source : "Speach at the National Union of Conservative and Constitutional Associations ",
    year : "1872",
    tag : "Success"
  }
]



/***
 * `getRandomQuote` function 
 * selects a random item from the quotes array and returns the quote object
***/

let number = -1;

function getRandomQuote() {
  let new_num;
  do {
  new_num = Math.floor(Math.random() * (quotes.length))  
  } while ( number === new_num )
  number = new_num
  let current_quote = quotes[number]
  return current_quote
}

/***
 * `printQuote` function
 * updates the html file so that a random quote is presented on the web page
***/

function printQuote() {
  let html_string;
  let current_quote = getRandomQuote();
  change_background_color()
  html_string = `<p class="quote"> ${current_quote.quote} </p>
  <p class="source"> ${current_quote.author}
   `
  if (current_quote.source != null) {
    html_string += `  <span class="citation"> ${current_quote.source} </span>
    `
  }
  if (current_quote.year != null) {
    html_string += `  <span class="year"> ${current_quote.year} , </span>
    `
  }
  if (current_quote.tag != null) {
    html_string += `  <span class="tag"> ${current_quote.tag} </span>
    `
  }
  html_string += `</p>`

  document.getElementById('quote-box').innerHTML = html_string;
  
  return html_string
}


/***
 * 'change_background_color' function
 * makes the background a random color
 ***/

function random_color_value() {
  return Math.floor(Math.random()* 256)
}
function change_background_color() {
  document.body.style.backgroundColor = `rgb(${random_color_value()},${random_color_value()},${random_color_value()})` // code adapted from https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
}


/***
 * exicute 'setInterval' function 
 * automaticly changes the quote every 10 - 20
 */


setInterval(printQuote, 10000) 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);