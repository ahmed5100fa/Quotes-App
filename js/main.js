var QuoteContent = document.getElementById('QuoteContent');
var QuoteAouther = document.getElementById('QuoteAouther');

var quots = [
    {Content: '"Be yourself; everyone else is already taken"', Name: '― Oscar Wilde'},
    {Content: '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."', Name: '― Albert Einstein'},
    {Content: '"A room without books is like a body without a soul."', Name: '― Marcus Tullius Cicero'},
    {Content: '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams"', Name: '― Dr. Seuss'},
    {Content: '"You only live once, but if you do it right, once is enough."', Name: '― Mae West'},
    {Content: '"Be the change that you wish to see in the world."', Name: '― Mahatma Gandhi'},
    {Content: '"In three words I can sum up everything I\'ve learned about life: it goes on."', Name: '― Robert Frost'},
    {Content: '"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals."', Name: '― J.K. Rowling'},
    {Content: '"If you tell the truth, you don\'t have to remember anything."', Name: '― Mark Twain'},
];

var previousIndex = -1; 

function generateRandomQuote() {
    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * quots.length);
    } while (randomNumber === previousIndex);
    QuoteContent.innerHTML = quots[randomNumber].Content;
    QuoteAouther.innerHTML = quots[randomNumber].Name;
    previousIndex = randomNumber;
}
