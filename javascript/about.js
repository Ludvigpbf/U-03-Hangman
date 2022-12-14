/* About header */
const header = document.createElement("header");
header.id = "header";
document.body.appendChild(header);

/* About heading */
const aboutH1 = document.createElement("h1");
aboutH1.id = "about-h1";
aboutH1.innerText = "About";
document.body.appendChild(aboutH1);

/* About text */
const aboutText = document.createElement("p");
aboutText.className = "about-text";
aboutText.innerText = [
  "This is a school project made by Ludvig Flyckt.\n" +
    "\nThe task is to make a Hangman game with:\n",
];
document.body.appendChild(aboutText);

/* Languages list */
const aboutList = ["HTML", "CSS", "JavaScript"];

/* Function to create languages list */
function languages() {
  const aboutUl = document.createElement("ul");
  aboutUl.id = "about-ul";

  for (let i = 0; i < aboutList.length; i++) {
    const aboutLi = document.createElement("li");
    const aboutText = document.createElement("p");
    aboutText.className = "about-text";
    aboutLi.className = "about-li";
    aboutText.appendChild(document.createTextNode(aboutList[i]));
    aboutLi.appendChild(aboutText);
    aboutUl.appendChild(aboutLi);
    document.body.appendChild(aboutUl);
  }
  return aboutUl;
}
document.body.appendChild(languages(aboutList));

/* About second text */
const aboutText2 = document.createElement("p");
aboutText2.className = "about-text";
aboutText2.innerText = ["To see more projects, " + "\nvisit my:"];
document.body.appendChild(aboutText2);

/* Link to my github */
const githubLink = document.createElement("a");
githubLink.setAttribute(
  "href",
  "https://github.com/Ludvigpbf?tab=repositories"
);
githubLink.innerText = "GitHub";
githubLink.id = "githublink";
document.body.appendChild(githubLink);
