/* Elements */

const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

const phoneMenu = document.createElement("nav");
phoneMenu.id = "phone-nav";
document.getElementById("header").appendChild(phoneMenu);

const rulesH1 = document.createElement("h1");
rulesH1.id = "rules-h1";
rulesH1.innerText = "Rules";
document.body.appendChild(rulesH1);

const rulesUl = document.createElement("ul");
rulesUl.id = "rules-ul";
document.body.appendChild(rulesUl);

const rulesLi = document.createElement("li");
rulesLi.id = "rules-li";
document.getElementById("rules-ul").appendChild(rulesLi);

const rulesList = [
  "First select a category",
  "Then start the game by selecting a letter",
  "If the letter is wrong the scale starts to tip over.",
  "On the left side of the screen you can see how many guesses you have left",
  "When the red ball hits the ground the game is over.",
  "If you get stuck, take a hint to move forvard. you have 3 hints each game",
  "When the word is complete the game is won!",
];
