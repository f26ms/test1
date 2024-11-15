var quote =[
        {text:"You miss 100% of the shots you don't take.",
        author:"--Wayne Gretzy"} ,
        {text:"The best revenge is massive success.",
            author:"--Frank Sinatra"} ,
        {text:"Do not take life too seriously. You will not get out alive.",
                author:"--Elbert Hubbard"} ,
        {text:"It's not what happens to you, but how you react to it that matters.",
                author:"--Epictetus"} ,
        {text:"Resentment is like drinking poison and waiting for your enemies to die.",
                author:"--Nelson Mandela"}
     ]


var previousIndex = -1;   // Store the previous index

function display() {
  var randomIndex = Math.floor(Math.random() * quote.length);


//Make sure the new random quote is not the same as the old one
  while (randomIndex === previousIndex) {
    randomIndex = Math.floor(Math.random() * quote.length);
  }

  var randomQuote = quote[randomIndex];


//Update the previous index
  previousIndex = randomIndex;

  
  document.getElementById("myrow").innerHTML = `
    <p>${randomQuote.text}</p>
    <p>${randomQuote.author}</p>
  `;
}



