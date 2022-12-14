/* Categories*/
let categoriesOb = {
  Animals: ["rabbit", "horse", "dog", "bird"],
  Cities: ["paris", "london", "boston", "prague"],
  Fruits: ["banana", "apple", "orange", "pear"],
  Movies: ["frost", "jaws", "batman", "avatar"],
};

/* Scale images */
const images = [
  "/assets/images/guess-2.svg",
  "/assets/images/guess-3.svg",
  "/assets/images/guess-4.svg",
  "/assets/images/guess-5.svg",
  "/assets/images/guess-6.svg",
];

/* Letters */
const alphabet = [
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

let wordToFind; // Random selected word
let chosenCategory; // Chosen category
let wordArray = []; // Array of the random word
let correctGuesses = [0]; // Number of correct guesses
let wordLength; // Length of the random word
let wrongGuesses = 0; // Number of wrong guesses
let livesUl = ["", "", "", "", ""]; // The red circles
let guessesLeft = 5; // Number of guesses left

////////////////////////////////////// Category Section //////////////////////////////////////
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

/* Categories buttons */
function makeUl(object) {
  let catUl = document.createElement("ul");
  catUl.id = "cat-ul";

  for (let property of Object.keys(object)) {
    let catList = document.createElement("li");
    let catBtn = document.createElement("button");
    catList.className = "cat-list";
    catBtn.className = "cat-btn ";
    catBtn.onclick = select;
    catBtn.appendChild(document.createTextNode(property));
    catList.appendChild(catBtn);
    catUl.appendChild(catList);

    function select() {
      document.getElementById("startGame-btn").style.visibility = "visible";
      wordToFind = getRandomWord(categoriesOb[property]);
      wordToFind = wordToFind.toUpperCase();
      wordLength = wordToFind.length;
      chosenCategory = property.toString();
      gameText.textContent = chosenCategory;
      secretWord(); // Function that change letters into questionmarks and in an array. Row 258
    }
  }
  return catUl;
}
document.getElementById("category-container").appendChild(makeUl(categoriesOb));

/* Change active class on buttons */
let categoryBtns = document.getElementsByClassName("cat-btn");
categoryBtns.onclick = showBtn; // Function to show "Start Game" button. Row 143

for (let i = 0; i < categoryBtns.length; i++) {
  categoryBtns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}

/* Adding active class to Animals button */
let activeBtn = categoryBtns[0];
activeBtn.className += "active";

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

/* Show Start Game button function */
function showBtn() {
  let startBtn = document.getElementById("startGame-btn");
  if (startBtn.style.visibility === "hidden") {
    startBtn.style.visibility = "visible";
  } else {
    startBtn.style.visibility = "hidden";
  }
}

/* Slide in game container function */
function start() {
  if (startGame.value == "start-game") {
    categoryContainer.style.transform = "translateX(-100vw)";

    gameContainer.style.transform = "translateX(-100vw)";
  }
}
////////////////////////////////////// End of Category section //////////////////////////////////////

////////////////////////////////////// Game Section //////////////////////////////////////
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
/* gameText.textContent = chosenCategory; */
document.getElementById("game-txt-container").appendChild(gameText);

/* Scale section */
const scaleSection = document.createElement("div");
scaleSection.id = "scale-section";
document.getElementById("game-container").appendChild(scaleSection);

/* Lives circles */
const livesContainer = document.createElement("div");
livesContainer.id = "lives-container";
document.getElementById("scale-section").appendChild(livesContainer);

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

/* Function to update lives left and scale image */
function updateWrongs() {
  let dots = document.getElementsByClassName("circles");
  let updateImages = document.getElementById("scale-img");
  if (guessesLeft == 4) {
    dots[0].style.backgroundColor = "red";
    updateImages.src = "/assets/images/guess-2.svg";
  } else if (guessesLeft == 3) {
    dots[1].style.backgroundColor = "red";
    updateImages.src = "/assets/images/guess-3.svg";
  } else if (guessesLeft == 2) {
    dots[2].style.backgroundColor = "red";
    updateImages.src = "/assets/images/guess-4.svg";
  } else if (guessesLeft == 1) {
    dots[3].style.backgroundColor = "red";
    updateImages.src = "/assets/images/guess-5.svg";
  } else if (guessesLeft == 0) {
    dots[4].style.backgroundColor = "red";
    updateImages.src = "/assets/images/guess-6.svg";
  }
}

let scaleImg = document.createElement("img");
scaleImg.src = "/assets/images/start.svg";
scaleImg.id = "scale-img";
document.getElementById("scale-section").appendChild(scaleImg);

/* Div for the hidden word */
let wordDiv = document.createElement("div");
wordDiv.id = "word-holder";
document.getElementById("scale-section").appendChild(wordDiv);

/* Paragraph for hidden word */
correctWord = document.createElement("p");
correctWord.setAttribute("id", "my-word");
document.getElementById("word-holder").appendChild(correctWord);

/* Paragraph for win/lose text */
resultWord = document.createElement("p");
resultWord.setAttribute("id", "result-text");
resultWord.style.display = "none";
document.getElementById("word-holder").appendChild(resultWord);

let wordParagraph = document.getElementById("my-word");
let resultParagraph = document.getElementById("result-text");

/* Change letters into questionmarks in an array */
function secretWord() {
  wordArray = wordToFind
    .split("")
    .map((questionMark) =>
      correctGuesses.indexOf(questionMark) >= 0 ? questionMark : "?"
    );
  wordParagraph.innerHTML = wordArray.join("");
}

/* Function to make the letterbuttons and set disabled = true/false */
function letterList(letters) {
  let lettersUl = document.createElement("ul");
  lettersUl.id = "letter-ul";

  for (let i = 0; i < letters.length; i++) {
    let letters = document.createElement("button");
    letters.className = "letter-list";
    let letterCheck = () => {
      let inTxt = letters.innerText;
      letters.disabled = true;
      guessedLetter(inTxt); // Function to check if the selected letter is in the hidden word
    };
    letters.addEventListener("click", letterCheck);
    letters.appendChild(document.createTextNode(alphabet[i]));
    lettersUl.appendChild(letters);
  }
  return lettersUl;
}
document.getElementById("game-container").appendChild(letterList(alphabet));

function guessedLetter(inTxt) {
  if (wordToFind.indexOf(inTxt) === -1) {
    guessesLeft--; // Reduces lives left
    wrongGuesses++; // Adds wrong guesses
    updateWrongs(); // Function to update lives left and scale image. Row 211
    winCheck(); // Function to check if game is won och lost. Row 306
  } else {
    for (let i = 0; i < wordToFind.length; i++) {
      if (wordToFind[i] == inTxt) {
        wordArray[i] = inTxt;
        correctGuesses++;
        winCheck(); // Function to check if game is won och lost. Row 306
      }
    }
    wordParagraph.innerHTML = wordArray.join("");
  }
}
/* Function to check if game is won och lost */
function winCheck() {
  if (wrongGuesses == 5) {
    wordParagraph.style.display = "none";
    resultParagraph.style.display = "flex";
    resultParagraph.innerText = "You lose..\n" + "Try again!";
    document.getElementById("letter-ul").style.display = "none";
  } else if (correctGuesses == wordLength) {
    wordParagraph.style.display = "none";
    resultParagraph.style.display = "flex";
    resultParagraph.innerText = "You win!\n" + "The word was: " + wordToFind;
    document.getElementById("letter-ul").style.display = "none";
  }
}

////////////////////////////////////// End of Game section //////////////////////////////////////
