// Define variables to track game state
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Represents the 3x3 game board

// Function to handle a player's move
function playerMove(cellIndex) {
    if (gameBoard[cellIndex] === '') { // Check if the cell is empty
        gameBoard[cellIndex] = currentPlayer; // Update the game board
        document.getElementsByTagName('button')[cellIndex].innerText = currentPlayer; // Update the button text
        // Check for a win or draw
        if (checkWin() === currentPlayer) {
            alert(currentPlayer + ' wins!');
            resetGame(); // Reset the game
        } else if (gameBoard.every(cell => cell !== '')) { // Check for a draw
            alert('It\'s a draw!');
            resetGame(); // Reset the game
        } else {
            // Switch players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Function to check for a win
function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let condition of winConditions) {
        if (gameBoard[condition[0]] !== '' &&
            gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[0]] === gameBoard[condition[2]]) {
            return gameBoard[condition[0]]; // Return the winning player
        }
    }
    return null; // Return null if no winner
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', '']; // Reset the game board
    const buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.innerText = ''; // Clear button text
    }
}

// Event listeners for button clicks
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            playerMove(i); // Call playerMove function on button click
        });
    }
});

// Function to handle the reset button
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', '']; // Reset the game board
    const buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.innerText = ''; // Clear button text
    }
}
