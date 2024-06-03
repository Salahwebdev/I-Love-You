var test = document.getElementById("content");
var quotes = [
  { quote: "In your eyes, I found my home." },
  { quote: "Your smile is my favorite sunrise." },
  { quote: "Loving you is my greatest adventure." },
  { quote: "Your love is the music of my heart." },
  { quote: "With you, every moment is magic." },
  { quote: "You are the reason my heart beats." },
  { quote: "Your laughter is my favorite symphony." },
  { quote: "You are my forever and always." },
  { quote: "In your arms, I find my paradise." },
  { quote: "You are the light of my life." },
  { quote: "Your love is my greatest treasure." },
  { quote: "You are my heart's desire." },
  { quote: "With you, life is a beautiful dream." },
  { quote: "Your love is my guiding star." },
  { quote: "You are my heart's delight." },
  { quote: "Loving you is my life's purpose." },
  { quote: "You are the love of my life." },
  { quote: "In your love, I find my strength." },
  { quote: "Your love is my greatest joy." },
  { quote: "You are my heart's song." },
  { quote: "With you, I am complete." },
  { quote: "Your love is my sanctuary." },
  { quote: "You are my heart's keeper." },
  { quote: "In your love, I find my peace." },
  { quote: "Your love is my greatest blessing." },
  { quote: "You are my heart's treasure." },
  { quote: "With you, my heart is home." },
  { quote: "Your love is my greatest gift." },
  { quote: "You are my heart's delight." },
  { quote: "In your love, I find my joy." },
  { quote: "Your love is my heart's melody." },
  { quote: "You are my heart's desire." },
  { quote: "With you, my heart sings." },
  { quote: "Your love is my heart's song." },
  { quote: "You are my heart's treasure." },
  { quote: "In your love, I find my peace." },
  { quote: "Your love is my heart's joy." },
  { quote: "You are my heart's keeper." },
  { quote: "With you, my heart is full." },
  { quote: "Your love is my heart's delight." },
  { quote: "You are my heart's home." },
  { quote: "In your love, I find my happiness." },
  { quote: "Your love is my heart's gift." },
  { quote: "You are my heart's light." },
  { quote: "With you, my heart shines." },
  { quote: "Your love is my heart's beacon." },
  { quote: "You are my heart's star." },
  { quote: "In your love, I find my serenity." },
  { quote: "Your love is my heart's peace." },
  { quote: "You are my heart's calm." },
  { quote: "With you, my heart rests." },
  { quote: "Your love is my heart's haven." },
  { quote: "You are my heart's sanctuary." },
  { quote: "In your love, I find my rest." },
  { quote: "Your love is my heart's refuge." },
  { quote: "You are my heart's safety." },
  { quote: "With you, my heart is at peace." },
  { quote: "Your love is my heart's tranquility." },
  { quote: "You are my heart's balance." },
  { quote: "In your love, I find my stability." },
  { quote: "Your love is my heart's foundation." },
  { quote: "You are my heart's support." },
  { quote: "With you, my heart is steady." },
  { quote: "Your love is my heart's anchor." },
  { quote: "You are my heart's rock." },
  { quote: "In your love, I find my courage." },
  { quote: "Your love is my heart's strength." },
  { quote: "You are my heart's hero." },
  { quote: "With you, my heart is brave." },
  { quote: "Your love is my heart's shield." },
  { quote: "You are my heart's protector." },
  { quote: "In your love, I find my fortitude." },
  { quote: "Your love is my heart's armor." },
  { quote: "You are my heart's guardian." },
  { quote: "With you, my heart is safe." },
  { quote: "Your love is my heart's haven." },
];
var usedQuotes = [];

function showQoutes() {
  if (usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }

  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (usedQuotes.includes(randomIndex));

  var quote = quotes[randomIndex];

  usedQuotes.push(randomIndex);

  var cartonna = `<div class="shadow-lg rounded-3 bg-opacity-50 bg-white p-3">
    <p class="text-capitalize ">${quote.quote}</p>
  </div>`;

  test.innerHTML = cartonna;
}
