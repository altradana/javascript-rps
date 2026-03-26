# Rock Paper Scissors 🎮

A simple **Rock Paper Scissors** game built with JavaScript.
The game runs in the browser console and allows the player to compete against the computer until one reaches **5 points**.

This project was built to practice **JavaScript fundamentals**, including functions, loops, conditional logic, and debugging.


## Features

* Random computer choice generation
* Player input using browser prompt
* Round result comparison
* Score tracking
* Game ends when a player reaches **5 points**

---

## How the Game Works

1. The computer randomly chooses **rock**, **paper**, or **scissors**.
2. The player enters their choice through a prompt.
3. The program compares both choices.
4. The winner of the round receives **1 point**.
5. The game continues until either the player or computer reaches **5 points**.

---

## Game Rules

| Player      | Computer    | Result      |
| ----------- | ----------- | ----------- |
| Rock        | Scissors    | Player Wins |
| Paper       | Rock        | Player Wins |
| Scissors    | Paper       | Player Wins |
| Same Choice | Same Choice | Tie         |

Otherwise, the **computer wins the round**.

---

## How to Run the Project

1. Clone the repository

```
git clone https://github.com/yourusername/rock-paper-scissors.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Open the **browser developer console**.

5. Start the game.

The prompt will ask for input:

```
Rock || Paper || Scissors
```

---

## Example Output

```
Human rock vs Computer paper
H:0 vs C:1
```

---

## Technologies Used

* JavaScript
* Browser Console
* Basic Game Logic

---

## Lessons Learned

While building this project, I practiced:

* Writing reusable JavaScript functions
* Using `Math.random()` for random computer choices
* Implementing game logic with conditional statements
* Using loops to control game flow
* Debugging a **variable shadowing issue** that caused an infinite loop

---

## Future Improvements

* Add a graphical user interface (buttons instead of prompt)
* Display results directly on the webpage
* Add animations and styling
* Track game history
* Improve input validation

---

## Acknowledgment

This project was built as part of the curriculum from
The Odin Project.
