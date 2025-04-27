window.handleCellClick = handleCellClick;
import { game } from './script.js';
import { displayTurn } from './dispalyTurn.js';
import { gameReset } from './gameReset.js';

// マス目をクリックした際の処理。
export function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = clickedCell.dataset.index;
  // console.log(clickedCell)
  // output
  // <div class="col-4 cell" data-index="2">
  //   <span class="x-mark">X</span>
  // </div>
  console.log(clickedCellIndex)
  // output
  // 2
  // 埋まっているマスをクリックした際は処理を行わない。
  if (game.State[clickedCellIndex] !== "") {
    return;
  } else {
      game.currentPlayer = handleCellPlayed(clickedCell, clickedCellIndex);
  }
  console.log(game.State)
  displayTurn(game.currentPlayer);
  
  // 勝敗が決まっているかの確認。決まっていたらX's Win!!! or O's Win!!!を表示。決まらないままマス目が全て埋まったらDraw!!!を表示。
  // ここではcurrentPlayerには次の入力待ちプレイヤーのbool値が格納されているため、trueの場合はO、falseの場合はXと記述。
  const winner = game.currentPlayer ? "O" : "X";
  // 空文字じゃなく、３つが全部同じマークなら勝利。
  if (game.winningPatterns.some(([a, b, c]) => game.State[a] !== "" && game.State[a] === game.State[b] && game.State[b] === game.State[c])) {
    setTimeout(() => {
      alert(`${winner}'s Wins!!!`);
      gameReset(game.currentPlayer); // 負け側のbool値が引数として渡される。
    }, 0);
    game.Over = true
  } else if (!game.State.includes('')) {
      setTimeout(() => {
          alert(`Draw!!!`);
          gameReset(game.currentPlayer);
      }, 0);
  }
}

// 対象のマス目に文字を表示する処理。
export function handleCellPlayed(cell, index) {
  game.State[index] = game.currentPlayer ? "X" : "O";
  const xMark = '<span class="x-mark">X</span>';
  const oMark = '<span class="o-mark">O</span>';
  cell.innerHTML = game.currentPlayer ? xMark : oMark;
  // XとOのターンを変更。
  game.currentPlayer = displayTurn(game.currentPlayer);
  return game.currentPlayer
}