import { displayTurn } from "./dispalyTurn.js";

window.gameReset = gameReset;

export function gameReset(currentPlayer) {
    gameState.fill("");
    boardCells.forEach(cell => {
      cell.innerText = "";
    });
    currentPlayer = !currentPlayer;
    displayTurn(currentPlayer);
    gameOver = false;
}