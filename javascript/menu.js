/////////// Phone menu ///////////

/* Phone nav */
const phoneMenu = document.createElement("nav");
phoneMenu.id = "phone-nav";
document.getElementById("header").appendChild(phoneMenu);

/* Menu links */
const menuButtons = ["Start", "New Game", "Rules", "About"];
const links = ["index.html", "game.html", "rules.html", "about.html"];

/* Phone buttons function */
function makeMenuBtnsPhone(listBtns) {
  const menuList = document.createElement("ul");
  menuList.id = "menu-list-phone";

  for (let i = 0; i < menuButtons.length; i++) {
    const btnList = document.createElement("li");
    const listBtns = document.createElement("a");
    listBtns.setAttribute("href", links[i]);
    btnList.className = "btnListPhone";
    listBtns.className = "listBtnsPhone";
    listBtns.appendChild(document.createTextNode(menuButtons[i]));
    btnList.appendChild(listBtns);
    menuList.appendChild(btnList);
  }
  return menuList;
}
document
  .getElementById("phone-nav")
  .appendChild(makeMenuBtnsPhone(menuButtons));

/* Toggle button */
const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
menuBtn.id = "menu-btn";
menuBtn.value = "closed";
menuBtn.onclick = open;
document.getElementById("phone-nav").appendChild(menuBtn);

/* Toggle menu function */
function open() {
  if (menuBtn.value == "closed") {
    menuBtn.value = "open";
    menuBtn.textContent = "Close";
    phoneMenu.style.height = "100vh";
    document.getElementById("menu-btn").style.transform = "translateY(75vh)";
    document.getElementById("menu-list-phone").style.transform =
      "translateY(30vh)";
    document.getElementById("menu-list-phone").style.visibility = "visible";
  } else if (menuBtn.value == "open") {
    menuBtn.value = "closed";
    menuBtn.textContent = "Menu";
    phoneMenu.style.height = "15vh";
    document.getElementById("menu-btn").style.transform = "translateY(0vh)";
    document.getElementById("menu-list-phone").style.transform =
      "translateY(-40vh)";
    document.getElementById("menu-list-phone").style.visibility = "hidden";
  }
}

/////////// Desktop menu ///////////

/* Desktop nav */
const desktopMenu = document.createElement("nav");
desktopMenu.id = "desktop-nav";
document.getElementById("header").appendChild(desktopMenu);

/* Desktop buttons function */
function makeMenuBtnsDesktop(listBtns) {
  const menuList = document.createElement("ul");
  menuList.id = "menu-list-desktop";

  for (let i = 0; i < menuButtons.length; i++) {
    const btnList = document.createElement("li");
    const listBtns = document.createElement("a");
    listBtns.setAttribute("href", links[i]);
    btnList.className = "btnListDesk";
    listBtns.className = "listBtnsDesk";
    listBtns.appendChild(document.createTextNode(menuButtons[i]));
    btnList.appendChild(listBtns);
    menuList.appendChild(btnList);
  }
  return menuList;
}
document
  .getElementById("desktop-nav")
  .appendChild(makeMenuBtnsDesktop(menuButtons));
