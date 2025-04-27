window.displayTurn = displayTurn;
import { game } from './script.js';

// X or OのTurnを表示するための処理。
export function displayTurn(currentPlayer) {
  // currentPlayerがtrueの場合はX、falseの場合はO。
  const player = currentPlayer ? 'X' : 'O';
  game.turnDisplay.innerText = `${player}'s Turn`;
  game.boardCells.forEach(cell => {
    if (cell.innerText === '') {
      cell.dataset.hoverMark = player;
    } else {
      delete cell.dataset.hoverMark;
    }
  });
  return !currentPlayer
}