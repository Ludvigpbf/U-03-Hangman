/* Header */
const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

/* Category section */
const categoryContainer = document.createElement("section");
categoryContainer.id = "category-container";
document.body.appendChild(categoryContainer);

/* Category container */
const categoryTxtContainer = document.createElement("div");
categoryTxtContainer.id = "category-txt-container";
document.getElementById("category-container").appendChild(categoryTxtContainer);

/* Category heading */
const categoryH1 = document.createElement("h1");
categoryH1.className = "section-h1";
categoryH1.innerText = "Categories";
document.getElementById("category-txt-container").appendChild(categoryH1);

/* Category paragraf */
const welcomeText = document.createElement("p");
welcomeText.className = "info-text";
welcomeText.textContent = "Choose a category!";
document.getElementById("category-txt-container").appendChild(welcomeText);

/* Categories*/
let categoriesOb = {
  Animals: ["rabbit", "horse", "dog", "bird"],
  Cities: ["paris", "london", "boston", "prague"],
  Fruits: ["banana", "apple", "orange", "pear"],
  Movies: ["frost", "jaws", "batman", "avatar"],
};

let wordToFind; // Random selected word
let chosenCategory; // Chosen category

/* Categories buttons */
function makeUl(object) {
  let catUl = document.createElement("ul");
  catUl.id = "cat-ul";

  for (let property of Object.keys(object)) {
    let catList = document.createElement("li");
    let catBtn = document.createElement("button");
    catList.className = "cat-list";
    catBtn.className = "cat-btn";
    /*  catBtn.value = "not-selected"; */
    /* catBtn.onclick = select; */
    catBtn.appendChild(document.createTextNode(property));
    catList.appendChild(catBtn);
    catUl.appendChild(catList);
    /* function select() {
      if (catBtn.value == "not-selected") {
        catBtn.value = "selected";
        catBtn.style.backgroundColor = "#1dd20d";
        catBtn.style.color = "black";
        document.getElementById("startGame-btn").style.backgroundColor =
          "#1dd20d";
        document.getElementById("startGame-btn").style.color = "black";
        document.getElementById("startGame-btn").style.visibility = "visible";
        wordToFind = getRandomWord(categoriesOb[property]);
        chosenCategory = property.toString();
        gameText.textContent = chosenCategory;
        console.log(wordToFind);
      } else if (catBtn.value == "selected") {
        catBtn.value = "not-selected";
        catBtn.style.backgroundColor = "black";
        catBtn.style.maxWidth = "4em";
        catBtn.style.color = "#cc4040";
        catBtn.style.height = "4em";
        document.getElementById("startGame-btn").style.backgroundColor =
          "black";
        document.getElementById("startGame-btn").style.visibility = "hidden";
      }
    } */
  }
  return catUl;
}
document.getElementById("category-container").appendChild(makeUl(categoriesOb));

let categoryBtns = document.getElementsByClassName("cat-btn");

function active(){
  
  if (categoryBtns == )
}

for (let i = 0; i < categoryBtns.length; i++) {
  categoryBtns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

/* Adding active class to Animals button */

/* let btns = document.getElementsByClassName("cat-btn");
let activeBtn = btns[0];
activeBtn.className += " active"; */

/* Get random word function */
function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* Start Game button */
const startGame = document.createElement("button");
startGame.textContent = "Start Game";
startGame.id = "startGame-btn";
startGame.value = "start-game";
startGame.onclick = start;
document.getElementById("category-container").appendChild(startGame);

function start() {
  if (startGame.value == "start-game") {
    categoryContainer.style.transform = "translateX(-100vw)";

    gameContainer.style.transform = "translateX(-100vw)";
  }
}

/* Game section */
const gameContainer = document.createElement("section");
gameContainer.id = "game-container";
document.body.appendChild(gameContainer);

/* Game container */
const gameTxtContainer = document.createElement("div");
gameTxtContainer.id = "game-txt-container";
document.getElementById("game-container").appendChild(gameTxtContainer);

/* Game heading */
const gameH1 = document.createElement("h1");
gameH1.className = "section-h1";
gameH1.innerText = "Category:";
document.getElementById("game-txt-container").appendChild(gameH1);

/* Game paragraf */
const gameText = document.createElement("p");
gameText.className = "info-text";
gameText.textContent = chosenCategory;
document.getElementById("game-txt-container").appendChild(gameText);

/* Scale section */
const scaleSection = document.createElement("div");
scaleSection.id = "scale-section";
document.getElementById("game-container").appendChild(scaleSection);

/* Lives circles */
const livesContainer = document.createElement("div");
livesContainer.id = "lives-container";
document.getElementById("scale-section").appendChild(livesContainer);

let livesUl = ["", "", "", "", ""];
let guessesLeft = 5;

function lives(livesList) {
  const guesses = document.createElement("ul");
  guesses.id = "guesses-left";
  for (let i = 0; i < livesUl.length; i++) {
    const livesList = document.createElement("li");
    const circles = document.createElement("div");
    livesList.className = "lives-list";
    circles.className = "circles";
    livesList.appendChild(circles);
    guesses.appendChild(livesList);
  }
  return guesses;
}
document.getElementById("lives-container").appendChild(lives(livesUl));

/* Scale images */
const images = {
  0: "/assets/images/start.svg",
  1: "/assets/images/guess-1.svg",
  2: "/assets/images/guess-2.svg",
  3: "/assets/images/guess-3.svg",
  4: "/assets/images/guess-4.svg",
  5: "/assets/images/guess-5.svg",
  6: "/assets/images/guess-6.svg",
};

let scaleImg = document.createElement("img");
scaleImg.src = "/assets/images/start.svg";
scaleImg.className = "scale-img";
document.getElementById("scale-section").appendChild(scaleImg);

let wordDiv = document.createElement("div");
wordDiv.id = "hold";
document.getElementById("scale-section").appendChild(wordDiv);

/* Letters */
const letter = [
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
];

function letterList(letters) {
  let lettersUl = document.createElement("ul");
  lettersUl.id = "letter-ul";
  for (let i = 0; i < letters.length; i++) {
    let letters = document.createElement("li");
    const disableButton = () => {
      console.log(letter.innerText);
      letters.disabled = true;
    };
    letters.addEventListener("click", disableButton);
    letters.className = "letter-list";
    letters.appendChild(document.createTextNode(letter[i]));
    lettersUl.appendChild(letters);
  }
  return lettersUl;
}
document.getElementById("game-container").appendChild(letterList(letter));

/* Hints */
let hints = {
  rabbit: ["It jumps", "Easter", "Eats carrots"],
  horse: ["Cowboys ride them", "Eats hey", "Have cloves"],
  dog: ["Barks", "Mans best friend", "Love balls"],
  bird: ["Tweets", "Can fly", "Eats maggots"],
  paris: ["Baguett", "Wine", "Notre dame"],
  london: ["Eye", "Harry potter", "Picadely cirkus"],
  boston: ["Baked beans", "Marathon", "Cheers"],
  prague: ["Beer", "100 Towers", "Wenceslas Square"],
  banana: ["Yellow", "Monkeys love them", "You peel them"],
  apple: ["Round", "Good for pies", "Good for juice"],
  orange: ["Tequila sunrise", "Juice", "Christmas"],
  pear: ["Smoothie", "Desserts", "Almost apple"],
  frost: ["Elsa", "Olof", "Sven"],
  jaws: ["Shark", "Boat", "Eaten"],
  batman: ["Dark Knight", "Alfred", "Gotham"],
  avatar: ["Jake Sully", "Blue", "New moon"],
};

const hintContainer = document.createElement("div");
hintContainer.id = "hint-container";
document.getElementById("game-container").appendChild(hintContainer);

const hintButton = document.createElement("button");
hintButton.id = "hint-button";
hintButton.textContent = "Hint?";
document.getElementById("hint-container").appendChild(hintButton);

const hintWord = document.createElement("p");
hintWord.id = "hint-word";
hintWord.textContent = "";
document.getElementById("hint-container").appendChild(hintWord);
