window.handleCellClick = handleCellClick;
import { displayTurn } from './dispalyTurn.js';
import { gameReset } from './gameReset.js';

// マス目をクリックした際の処理。
export function handleCellClick(event, winningPatterns, gameState, currentPlayer, gameOver) {
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
    if (gameState[clickedCellIndex] !== "") {
      return;
    } else {
        currentPlayer = handleCellPlayed(clickedCell, clickedCellIndex);
    }
    console.log(gameState)
    
    // 勝敗が決まっているかの確認。決まっていたらX's Win!!! or O's Win!!!を表示。決まらないままマス目が全て埋まったらDraw!!!を表示。
    const winner = currentPlayer ? "O" : "X";
    // 空文字じゃなくて、３つが全部同じマークなら勝利。
    if (winningPatterns.some(([a, b, c]) => gameState[a] !== "" && gameState[a] === gameState[b] && gameState[b] === gameState[c])) {
      setTimeout(() => {
        alert(`${winner}'s Wins!!!`);
        gameReset(currentPlayer);
      }, 0);
      gameOver = true
    } else if (!gameState.includes('')) {
        setTimeout(() => {
            alert(`Draw!!!`);
            gameReset(currentPlayer);
        }, 0);
    }
    displayTurn(currentPlayer); // Turnの表示更新。
  }
  
// 対象のマス目に文字を表示する処理。
export function handleCellPlayed(cell, index) {
    gameState[index] = currentPlayer ? "X" : "O";
    const xMark = '<span class="x-mark">X</span>';
    const oMark = '<span class="o-mark">O</span>';
    cell.innerHTML = currentPlayer ? xMark : oMark;
    // xとoのターンを変更。
    currentPlayer = displayTurn(currentPlayer);
    return currentPlayer
}