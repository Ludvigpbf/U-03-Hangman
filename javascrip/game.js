/* Elements */

const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

const phoneMenu = document.createElement("nav");
phoneMenu.id = "phone-nav";
document.getElementById("header").appendChild(phoneMenu);

const startH1 = document.createElement("h1");
startH1.id = "category-h1";
startH1.innerText = "Category:";
document.body.appendChild(startH1);

const welcomeText = document.createElement("p");
welcomeText.id = "info-text";
welcomeText.textContent = "Animals";
document.body.appendChild(welcomeText);



function lives(list)
const guesses = document.createElement("ul");
guesses.id = "guesses-left";

for (let i = 0; i < 4; i++) {
  const livesList = document.createElement("li");
  livesList.className = "lives-list";
  livesList.appendChild(document.createTextNode(property));
 body.appendChild(livesList);

return guesses;
}
document.body.appendChild(lives(list));
const hints = {
  rabbit: ["It jumps", "Easter", "Eats carrots"],
  horse: ["Cowboys ride them", "Eats hey", "Have cloves"],
  dog: ["Barks", "Mans best friend", "Love balls"],
  bird: ["Tweets", "Can fly", "Eats maggots"],
  malmö: ["Near denmark", "South in sweden", ""],
  umeå: ["North in sweden", "City of birch", "Has a river"],
  köping: [" ", " ", " "],
  örebro: [" ", " ", " "],
  banana: ["Yellow", "Monkeys love them", "You peel them"],
  apple: ["Round", "Good for pies", "Good for juice"],
  orange: ["", " ", " "],
  pear: [" ", " ", " "],
  frost: [" ", " ", " "],
  jaws: [" ", " ", " "],
  batman: [" ", " ", " "],
  avatar: [" ", " ", " "],
};

const letterList = document.createElement("ul");

/* Letters */
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Å",
  "Ä",
  "Ö",
];

/* Loops */
for (i = 0; i < 29; i++) {
  const li = document.createElement("li");
  li.innerHTML = letters[i];
}