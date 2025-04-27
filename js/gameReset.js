import { displayTurn } from "./dispalyTurn.js";
import { game } from './script.js';

window.gameReset = gameReset;

export function gameReset(currentPlayer) {
  game.State.fill("");
  game.boardCells.forEach(cell => {
    cell.innerText = "";
  });
  game.currentPlayer = displayTurn(currentPlayer); // 負け側のターン表示
  displayTurn(game.currentPlayer) // // 勝ち側のターン表示
  game.Over = false;
}