# U-03-Hangman

This is a school project about making a Hangman game with JavaScript.

# The Task

This task involves individually implementing a popular rudimentary game in JavaScript - "hang old man". As support, there will be code and a structure to start from which you can use for help when solving the task.

Hang old man, is a game where the word is randomly presented. The player then guesses which letters the word contains, for each wrong answer a part of the "hanging old man" picture is drawn up. If the player guesses wrong enough times and the old man has been "hung", the player has lost. If, on the other hand, the player succeeds in guessing all the letters, the player wins.

## Requirement

A working game in JavaScript that can be played on a web page

- The game must be playable until the player either wins (guess the correct word) or loses (the man gets hanged)

- The player must be able to guess at least 5 times before the old man is hanged

- The player should be able to restart the game after either a win or a loss

- The words to be guessed must be able to contain the same letter several times (keep in mind that some words have the same letter three or more times)

- The website must also meet the following requirements:

  - Works in several different browsers and on several different types of devices:

    - PC desktop (resolution 1920 x 1280)

    - Apple iPhone 12/13Pro (390x844)

- Design is optional but the following items must be included:

  - Buttons for all letters (alternatively another input option for all letters)

  - Visual representation of the hanging old man procedure for each step of the game's process.

## Grading

This submission provides the basis for the following course objectives.

- JavaScript / ECMAScript [JS 1.1]

- DOM Manipulation [JS 1.4]

- Lexical scope [JS 1.7]

- Event action [JS 1.8]

- Develop web solutions with JavaScript [JS 2.1]

In addition to this submission, there may also be more examination elements that form the basis for the same criteria.

### Approved

To achieve Pass as a grade on this submission, you must:

- perform all skills targeted by the task with good dexterity

- With good handling, it is aimed that submitted code should follow a defined standard, be correctly indented, not cause errors during execution. Furthermore, the task must be thoroughly documented (in code, markup and styling), which demonstrates both an understanding of the task as well as the various techniques.

### Well approved

To achieve Well Passed as a grade on this submission, you must:

- performs all the knowledge and skills that the task has as its goal with a very good hand

- Very good handling includes, in addition to the approved level, writing well-thought-out semantic HTML, and having a well-developed thinking in the structure of the CSS code, as well as applying a consistent choice of patterns in the JavaScript code and that version management via Git is concise , uniform and frequent. Furthermore, students should also have disregarded parts of, or all of, the original codebase that was distributed in connection with the beginning of the assignment.

---

## Variations of the game

When you take the game apart you get the parameters:

1. The player is guessing a word
2. If the player doesn't get the right word in the set number of guesses, he losses.
3. If he guess the correct word before the number of guesses run out, he wins.

### Variation 1

**Numbers** <br>
The player doesn't have to guess a word but instead guess the correct numbers in a row.

### Variation 2

**Syntax:** <br>
The player needs to guess the correct JavaScript syntax. The image that appears when the players guesses wrong could be true/false image. For each wrong guess a circle of false starts filling up. For each right guess a circle of true starts filling up.

### **_Variation 3_**

**Tip the Scale:** <br>
When the player guesses the wrong letter the scale starts tipping over. If 5 wrong guesses are made, the scale finally falls to one side.

### Variation 4

**Hourglass:** <br>
Hourglass starts with the sand at the bottom. At first guess the hourglass is turned upside down. At 5 more wrong guesses the sand(time) runs out.

### Variation 5

**Music:** <br>
The player is guessing a melody with the help of piano keys.

---
