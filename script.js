// script.js
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);

function handleClick(event) {
    const index = event.target.dataset.index;
    if (board[index] === '') {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin()) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            resetGame();
        } else if (board.every(cell => cell !== '')) {
            setTimeout(() => alert(`It's a draw!`), 100);
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => 
        pattern.every(index => board[index] === currentPlayer)
    );
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
}
