

const quote = document.querySelector("#quote_div span:first-child");
const author = document.querySelector("#quote_div span:last-child");

const quoteArray = [
    {
        quote : "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
        author: "Paul Samuelson",
    },
    {
        quote : "The four most dangerous words in investing are: “This time it’s different”.",
        author: "Sir John Templeton",
    },
    {
        quote : "Wide diversification is only required when investors do not understand what they are doing.",
        author: "Warren Buffett",
    },
    {
        quote : "Rule number one: Don’t lose money. Rule number two: Don’t forget rule number one.",
        author: "Warren Buffett",
    },
    {
        quote : "The most important quality for an investor is temperament, not intellect.",
        author: "Warren Buffett"
    },
    {
        quote : "Games are won by players who focus on the playing field – not by those whose eyes are glued to the scoreboard.",
        author: "Warren Buffett"
    },
    {
        quote : "October: This is one of the peculiarly dangerous months to speculate in stocks. The others are July, January, September, April, November, May, March, June, December, August and February.",
        author: "Mark Twain",
    },
    {
        quote : "The trick is not to learn to trust your gut feelings, but rather to discipline yourself to ignore them. Stand by your stocks as long as the fundamental story of the company hasn’t changed.",
        author: "Peter Lynch",
    },
    {
        quote : "If you aren’t thinking about owning a stock for ten years, don’t even think about owning it for ten minutes.",
        author: "Warren Buffett",
    },
    {
        quote : "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
        author: "Phillip Fisher",
    },
    {
        quote : "An investment in knowledge pays the best interest.",
        author: "Benjamin Franklin",
    },
    {
        quote : "If investing is entertaining, if you’re having fun, you’re probably not making any money. Good investing is boring.",
        author: "George Soros",
    },
    {
        quote : "Derivatives are financial weapons of mass destruction.",
        author: "Warren Buffett",
    },
    {
        quote : "If I’d only followed CNBC’s advice, I’d have a million dollars today. Provided I’d started with a hundred million dollars.",
        author: "Jon Stewart",
    },
    {
        quote : "Much success can be attributed to inactivity. Most investors cannot resist the temptation to constantly buy and sell.",
        author: "Warren Buffett",
    },
    {
        quote : "Unless you can watch your stock holding decline by 50% without becoming panic stricken, you should not be in the stock market.",
        author: "Warren Buffett",
    },
    {
        quote : "More money has been lost trying to anticipate and protect from corrections than actually in them.",
        author: "Peter Lynch",
    },
    {
        quote : "The investor’s chief problem and even his worst enemy is likely to be himself.",
        author: "Benjamin Graham",
    },
    {
        quote : "Tell me where I’m going to die so that I won’t go there.",
        author: "Сharlie Munger",
    }
]

const quoteNum = Math.floor(Math.random()*quoteArray.length);

quote.innerText = quoteArray[quoteNum].quote;
author.innerText = quoteArray[quoteNum].author;


