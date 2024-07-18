# Tic-Tac-Toe Game

In this project you are going to make a Tic Tac Toe game that you can play in your browser!

## Instructions

- ### Step 1: Set up the project structure

  1.  Create an HTML file and name it as index.html.
  2.  Create a CSS file and name it as style.css.
  3.  Create a JavaScript file and name it as script.js.

            Please note that a basic structure for the HTML, CSS, and JS files is available, allowing you the option to use it and fill in the missing code or construct everything from scratch.

---

- ### Step 2: Implement the game logic in the JavaScript file (script.js)

  1.  Build the functions that allow players to add marks to a specific spot on the board. Then tie it to the DOM, letting players click on the gameboard to place their marker. Also, don’t forget the logic that keeps players from playing in spots that are already taken!

      - Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player objects or gameboard .. but take care to put them in "logical" places. Spending a little time brainstorming here can make your life much easier later!

## Let's see How :

---

- ## The GameFlow of the Tic Tac Toe !!!

1. Initialize the game by creating a board with 9 empty cells and two players objects, each has a unique marker: "X" / "O" and a name property.

2. When a player clicks on a cell in the board:

   - Check if the clicked cell is already occupied by a marker. If it is, disallow the move.
   - If the cell is empty, mark it with the current player's marker ("X" or "O").
   - Check if the current player has achieved a winning combination on the board:
     - Check for horizontal, vertical, and diagonal lines of the same marker.
     - If a winning combination is found, declare the current player as the winner.
   - If there are no more empty cells and no winner, declare the game as a tie.

   - Switch the turn to the next player.

3. Update the display of the board after each move to show the markers in the corresponding cells.
4. If a player wins or the game ends in a tie:
   - Display a message indicating the result (e.g., "Player X wins!", "Player O wins!", or "It's a tie!").
   - Prevent any further moves by removing the event listener for cell clicks.
5. Repeat steps 2 to 4 until the game is over or players decide to restart.

   By following this logic, players will be able to take turns marking cells with their respective markers, and the game will determine if there is a winner or a tie.

---

## Extra

- Add a restart button for the Game
- Ask the players to add their names and assign them to the player object
- Display the winning message on the screen
- Add your own style 

---

`Important note:`

         Please keep in mind that certain aspects of this assignment are intentionally designed to challenge you and push you beyond your comfort zone. It is natural to feel underprepared for certain parts of the task.Be Strong and enjoy moving into the unknown . You will thrive in this industry if you learn to love learning with little support . Go make some mistakes, collaborate with your colleagues, search and figure it out .You've got this!
