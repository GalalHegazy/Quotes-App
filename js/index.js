var myQuote=document.getElementById("myQuote");

var allQuote=
[
` “Be yourself; everyone else is already taken.”― Oscar Wilde `,    //index 0
` “You only live once, but if you do it right, once is enough.”― Mae West `, //index 1
` “Be the change that you wish to see in the world.” ― Mahatma Gandhi `, //index 2
` “If you tell the truth, you dont have to remember anything”― Mark Twain ` , //index 3
` “Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde ` //index 4
];

function changeQuote() {
    var myRandomNum = Math.floor( Math.random() * allQuote.length );
     var box= `${allQuote[myRandomNum]}`;
     myQuote.innerHTML=box;
}




