/* Elements */

const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

const startH1 = document.createElement("h1");
startH1.id = "start-h1";
startH1.innerText = "Tip the Scale!";
document.body.appendChild(startH1);

const welcomeText = document.createElement("p");
welcomeText.id = "welcome-text";
welcomeText.textContent =
  "Tip the scale is a game much like Hangman." +
  "\nGuess a word by selecting letters one by one." +
  "\nFor each wrong guess the scale starts to tip over." +
  "\nAfter five wrong guesses the ball hits the ground and the game is over.";
document.body.appendChild(welcomeText);

const letsGoBtn = document.createElement("a");
letsGoBtn.setAttribute("href", "game.html");
letsGoBtn.textContent = "Lets Go!";
letsGoBtn.id = "letsGo-btn";
document.body.appendChild(letsGoBtn);
