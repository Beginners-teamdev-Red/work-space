import { handleCellClick } from './handleCellClick.js';

export const game = {
  State:   ["","","","","","","","",""], // マス目の状態管理用の変数。
  currentPlayer: true, // 入力待ちのプレイヤーを表す変数。trueの場合はX, falseの場合はOのターン。
  Over:    false, // ゲーム終了判定フラグ。
  turnDisplay:  document.getElementsByClassName("turn-display")[0], // 入力待ちのプレイヤーを表示するdiv要素をグローバルに保持。
  boardCells:   document.querySelectorAll(".cell"), // ページ内の全ての.cell要素を取得してグローバル変数boardCells(= export let boardCells)にキャッシュしている。
  // 勝利した場合のindexパターン。
  winningPatterns: [ 
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
};

function init() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });
  game.turnDisplay.innerText = "X's Turn";
  game.boardCells.forEach(cell => cell.dataset.hoverMark = 'X');
}

document.addEventListener('DOMContentLoaded', init);