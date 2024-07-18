/*Do not change this code*/

// Create the board with 9 cells
let board = ["", "", "", "", "", "", "", "", ""];

$("#btnStart").click(function () {
  player1.name = $("#firstPlayer").val();
  player2.name = $("#secondPlayer").val();
  $("#inputBox").css("display", "none");
});

function Player(marker, name) {
  this.name = name;
  this.marker = marker;
}

/* ----create the  players Object----- */

const player1 = new Player("X", "");
const player2 = new Player("O", "");

/* ----The current player, starts with "X"----*/

let currentPlayer = player1;

/* -----Function to handle a player's move---- */
let round = 0;
let handleMove = (cellIndex) => {
  // Check if the clicked cell is already occupied
  if (board[cellIndex] !== "") {
    return;
  } else {
    board[cellIndex] = currentPlayer.marker;
  }
  // Mark the cell with the current player's marker
  // Update the display of the board
  renderBoard();

  if (round >= 4) {
    if (checkWin()) {
      endGame(currentPlayer.name + " is the winner!!🥇");

      return;
    }

    // Check if the board is full (game ends in a tie)
    if (board.every((el) => el == "X" || el == "O")) {
      endGame("The Game is a Tie.");
      return;
    }
  }
  round++;

  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }

  // Switch the turn to the next player
}

/* -------Function to render the board array on the screen------------ */

let renderBoard = () => {
  for (let index in board) {
    cells[index].innerText = board[index];
  }
}

/* ----Function to check for a winning combination---- */

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontal combinations
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Vertical combinations
    [0, 4, 8],
    [2, 4, 6], // Diagonal combinations
  ];
  return winningCombinations.some((arr) =>
    arr.every((el) => board[el] == currentPlayer.marker)
  );
  // return winningCombinations.some(arr =>(arr.every(index=> board[index] == "X" )) || (arr.every(index=> board[index] == "O" )));
}

/* ---- Function to end the game ---- */

let endGame = (message) => {
  $("#endOfGame").css("display", "block");
  $("#result").css("display", "block");
  $("#result").text(message);
  $("#btn").click(function() {
    board = ["", "", "", "", "", "", "", "", ""];
    $("#endOfGame").css("display", "none");
    $("#result").css("display", "none");
    Array.from(cells).forEach((cell) => (cell.innerText = ""));
    currentPlayer = player1;
    round = 0;
  });
}

// Add event listeners to the cells (click event for each cell)
const cells = document.getElementsByClassName("cell");
var dataset = {};
Array.from(cells).forEach((cell) => {
  cell.addEventListener("click", function () {
    dataset.index = cell.getAttribute("data-index");
    cellClickHandler();
  });
});

//--------------- Do not change this code ------------------

// Event handler for cell clicks
let cellClickHandler = () => {
  const cellIndex = parseInt(this.dataset.index);
  handleMove(cellIndex);
}

// Render the initial board
renderBoard();
