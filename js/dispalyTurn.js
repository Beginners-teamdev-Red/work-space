window.displayTurn = displayTurn;

// X or OのTurnを表示するための処理。
export function displayTurn(currentPlayer) {
    // currentPlayer が true → X、false → O。
    const player = currentPlayer ? 'X' : 'O';
    turnDisplay.innerText = `${player}'s Turn`;
    boardCells.forEach(cell => {
        if (cell.innerText === '') {
          cell.dataset.hoverMark = player;
        } else {
          delete cell.dataset.hoverMark;
        }
    });
    return !currentPlayer
}