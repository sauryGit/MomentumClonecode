const quotes = [
{
    quote: "The way to get started is quit talking and begin what you have to do.",
    author: "Walt Disney",
},
{
    quote: "To be or not to be, that is a question.",
    author: "William Shakespeare",
},
{
    quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    auther: "Dolly Parton",
},
{
    quote: "If you want to succeed, focus on changing yourself, not others.",
    author : "Unknown",
},
{
    quote: "If you can't change it, change your attitude.",
    author: "Maya Angelou",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- "+ todaysQuote.author;