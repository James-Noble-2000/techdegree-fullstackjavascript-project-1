/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array that holds all quotes along with the author and if avalible the sorce and year
***/

const quotes = [
  {
    quote : "I don't think that success has got anything to do with money",
    author : "Martin Bell",
    source : "Reflections of Success",
    year : "1997"
  },
  {
    quote : "Successful people don't have fewer problems. They have determined that nothing will stop them from going forward.",
    author : "Ben Carson",
    source : "Gifted Hands: The Ben Carson Story",
    year : "1996"
  },
  {
    quote : "Try not to become a man of success. Rather become a man of value.",
    author : "Albert Einstein",
    source : "Einstein and teh Poet",
    year : "1983"
  },
  {
    quote : "If one cannot have success, the next most agreeable thing is failure.",
    author : "Jean Ingelow",
    source : "His Thoughts and Ways",
    year : "1886"
  },
  {
    quote : "People become really quite remarkable when they start thinking that they can do things. When they believe in themselves they have the first secret of success.",
    author : "Norman Vincent Peale",
    source : "Positive Thinking Every Day: An Inspiratino for Each Day of the Year",
    year : "1993"
  },
  {
    quote : "The secret of success is constancy of purpose.",
    author : "Benjamin Disraeli",
    source : "Speach at the National Union of Conservative and Constitutional Associations ",
    year : "1872"
  }
]



/***
 * `getRandomQuote` function that selects a random item from the quotes array and returns the quote object
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
 * `printQuote` function that updates the html file so that a random quote is presented on the web page
***/
function printQuote() {
  let html_string;
  let current_quote = getRandomQuote();
  html_string = `<p class="quote"> ${current_quote.quote} </p>
  <p class="source"> ${current_quote.author}
   `
  if (current_quote.source != null) {
    html_string += `  <span class="citation"> ${current_quote.source} </span>
    `
  }
  if (current_quote.year != null) {
    html_string += `  <span class="year"> ${current_quote.year} </span>
    `
  }
  html_string += `</p>`

  document.getElementById('quote-box').innerHTML = html_string;

  return html_string
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);