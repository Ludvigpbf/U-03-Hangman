/* Categories */
const animals = ["rabbit", "horse", "dog", "bird"];
const cities = ["malmö", "umeå", "köping", "örebro"];
const fruits = ["banana", "apple", "orange", "pear"];
const movies = ["frost", "jaws", "batman", "avatar"];

/* Elements */
const button = document.createElement("BUTTON");
const ul = document.createElement("ul");

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

/* Loops */
for (i = 0; i < 29; i++) {
  const li = document.createElement("li");
  li.innerHTML = letters[i];
}
