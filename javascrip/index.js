/* Elements */

const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

const phoneMenu = document.createElement("nav");
phoneMenu.id = "phone-nav";
document.getElementById("header").appendChild(phoneMenu);

const startH1 = document.createElement("h1");
startH1.id = "start-h1";
startH1.innerText = "Tip the Scale!";
document.body.appendChild(startH1);

const welcomeText = document.createElement("p");
welcomeText.id = "welcome-text";
welcomeText.textContent =
  "Tip the scale is a game much like Hangman." +
  "Guess a word by selecting letters one by one." +
  "\nFor each wrong guess the scale starts to tip over." +
  "After five wrong guesses the ball hits the ground and the game is over.";
document.body.appendChild(welcomeText);

/* Dropdown menu */

const menuButtons = ["New Game", "Rules", "Categories", "About"];

function makeMenuBtns(listBtns) {
  const menuList = document.createElement("ul");
  menuList.id = "menu-list";

  for (let i = 0; i < menuButtons.length; i++) {
    const btnList = document.createElement("li");
    const listBtns = document.createElement("a");
    listBtns.setAttribute("href", "categories.html");
    btnList.className = "btnList";
    listBtns.className = "listBtns";
    listBtns.appendChild(document.createTextNode(menuButtons[i]));
    btnList.appendChild(listBtns);
    menuList.appendChild(btnList);
  }
  return menuList;
}
document.getElementById("phone-nav").appendChild(makeMenuBtns(menuButtons));

/* Buttons */
const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
menuBtn.id = "menu-btn";
menuBtn.onclick = open;
document.getElementById("phone-nav").appendChild(menuBtn);

const letsGoBtn = document.createElement("a");
letsGoBtn.setAttribute("href", "categories.html");
letsGoBtn.textContent = "Lets Go!";
letsGoBtn.id = "letsGo-btn";
document.body.appendChild(letsGoBtn);

/* Functions */
function open() {
  if (menuBtn.clicked == true) {
    phoneMenu.style.height = "15vh";
  } /* else if ((phoneMenu.style.height = "100vh" && menuBtn.clicked == true)) {
    phoneMenu.style.height = "100vh";
    document.getElementById("menu-btn").style.transform = "translateY(75vh)";
    document.getElementById("menu-list").style.transform = "translateY(30vh)";
    document.getElementById("menu-list").style.visibility = "visible";
    menuBtn.style.content = "Close";
  } */ else {
    phoneMenu.style.height = "100vh";
    document.getElementById("menu-btn").style.transform = "translateY(75vh)";
    document.getElementById("menu-list").style.transform = "translateY(30vh)";
    document.getElementById("menu-list").style.visibility = "visible";
    menuBtn.style.content = "Close";
  }
}
