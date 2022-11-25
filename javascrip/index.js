/* Categories */
const animals = ["rabbit", "horse", "dog", "bird"];
const cities = ["malmö", "umeå", "köping", "örebro"];
const fruits = ["banana", "apple", "orange", "pear"];
const movies = ["frost", "jaws", "batman", "avatar"];

/* Buttons */
const menuBtn = document.createElement("a");
menuBtn.setAttribute("href", "#phone-nav");
menuBtn.innerHTML = "Menu";
menuBtn.id = "menu-btn";
document.getElementById("header").appendChild(menuBtn);
menuBtn.onclick = function () {
  open();
};

/* const closeBtn = document.createElement("a");
closeBtn.setAttribute("href", "#header");
closeBtn.innerHTML = "Close";
closeBtn.id = "close-btn";
document.getElementById("").appendChild(closeBtn);
closeBtn.addEventListener("click", close()); */

const letsGo = document.createElement("a");
letsGo.setAttribute("href", "categories.html");
letsGo.innerHTML = "Lets Go!";
letsGo.id = "letsGo-btn";
document.getElementById("lets-go").appendChild(letsGo);

const phoneNav = document.getElementById("phone-nav");
phoneNav.style.display = "none";

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

/* ul */
const menuList = document.createElement("ul");
menuList.id = "menu-list2";
document.getElementById("phone-nav").appendChild(menuList);

const menuListBtns = document.createElement("li");
document.getElementById("menu-list2").appendChild(menuListBtns);
/* Loops */
for (i = 0; i < 29; i++) {
  const li = document.createElement("li");
  li.innerHTML = letters[i];
}

/* Functions */

function open() {
  const phoneNav = document.getElementById("phone-nav");
  if (phoneNav.style.display === "none") {
    phoneNav.style.display = "block";
  } else {
    phoneNav.style.display = "none";
  }
}
function close() {
  document.getElementById("phone-nav").style.display = "none";
}
