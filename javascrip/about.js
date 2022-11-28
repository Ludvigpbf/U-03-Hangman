const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

const phoneMenu = document.createElement("nav");
phoneMenu.id = "phone-nav";
document.getElementById("header").appendChild(phoneMenu);

const aboutH1 = document.createElement("h1");
aboutH1.id = "about-h1";
aboutH1.innerText = "About";
document.body.appendChild(aboutH1);

const githubLink = document.createElement("a");
githubLink.setAttribute(
  "href",
  "https://github.com/Ludvigpbf?tab=repositories"
);
githubLink.id = "githublink";

const aboutText = document.createElement("p");
aboutText.id = "about-text";
aboutText.innerText =
  "This is a school project made by Ludvig Flyckt.\n" +
  "The task is to make a Hangman game with:" +
  aboutList +
  "Visit my\n" +
  githubLink +
  "\nto see more projects.";
document.body.appendChild(aboutText);

const aboutList = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < aboutList.length; i++);

const aboutText = document.createElement("p");
aboutText.id = "about-text";
aboutText.innerText =
  "This is a school project made by Ludvig Flyckt.\n" +
  "The task is to make a Hangman game with:";
document.body.appendChild(aboutText);
