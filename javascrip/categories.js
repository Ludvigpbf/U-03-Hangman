/* Elements */

const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

const phoneMenu = document.createElement("nav");
phoneMenu.id = "phone-nav";
document.getElementById("header").appendChild(phoneMenu);

const startH1 = document.createElement("h1");
startH1.id = "category-h1";
startH1.innerText = "Categories";
document.body.appendChild(startH1);

const welcomeText = document.createElement("p");
welcomeText.id = "info-text";
welcomeText.textContent = "Choose a category!";
document.body.appendChild(welcomeText);

const container = document.createElement("div");
container.id = "category-container";
document.body.appendChild(container);

/* Dropdown menu */
const menuList = document.createElement("ul");
menuList.id = "menu-list2";
document.getElementById("phone-nav").appendChild(menuList);

const menuButtons = ["New Game", "Rules", "Categories", "About"];
menuButtons.forEach(function () {
  const btnList = document.createElement("li");
  btnList.className = "btnList";
  document.getElementById("menu-list2").appendChild(btnList);
});

/* Buttons */
const menuBtn = document.createElement("a");
menuBtn.setAttribute("href", "#phone-nav");
menuBtn.innerText = "Menu";
menuBtn.id = "menu-btn";
document.getElementById("phone-nav").appendChild(menuBtn);

const startGame = document.createElement("a");
startGame.setAttribute("href", "game.html");
startGame.textContent = "Start Game";
startGame.id = "startGame-btn";
document.body.appendChild(startGame);

/* Categories */
const categoriesOb = {
  Animals: ["rabbit", "horse", "dog", "bird"],
  Cities: ["malmö", "umeå", "köping", "örebro"],
  Fruits: ["banana", "apple", "orange", "pear"],
  Movies: ["frost", "jaws", "batman", "avatar"],
};

function makeUl(object) {
  const catList = document.createElement("ul");
  catList.id = "category-list";

  for (let property of Object.keys(object)) {
    const catBtn = document.createElement("li");
    catBtn.className = "catBtn";
    catBtn.appendChild(document.createTextNode(property));
    catList.appendChild(catBtn);
  }
  return catList;
}
document.getElementById("category-container").appendChild(makeUl(categoriesOb));
