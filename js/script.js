import { handleCellClick } from './handleCellClick.js';

// 定数
// 勝利した場合のindexパターン。
window.winningPatterns = [
  [0,1,2], [3,4,5], [6,7,8],  // 横3列
  [0,3,6], [1,4,7], [2,5,8],  // 縦3列
  [0,4,8], [2,4,6]            // 斜め2列
];
// 変数
// マス目の状態管理用の変数。
window.gameState = ["", "", "", "", "", "", "", "", ""];
// 入力待ちのプレイヤーを表す変数。trueの場合はx, falseの場合はoのターン
window.currentPlayer = true;
// ゲーム終了判定フラグ。
window.gameOver = false;
// プレイヤー交代を表示するdiv要素をグローバルに保持
window.turnDisplay = document.getElementById('turn-display')
// ページ内の全ての.cell要素を取得してグローバル変数boardCells(= window.boardCells)にキャッシュしている
window.boardCells = document.querySelectorAll('.cell');

function init() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", event => {
      handleCellClick(event, winningPatterns, gameState, currentPlayer, gameOver);
    });
  });
  turnDisplay.innerText = "X's Turn";
  boardCells.forEach(cell => cell.dataset.hoverMark = 'X');
}

document.addEventListener('DOMContentLoaded', init);