// マス目の状態管理用の変数
let gameState = ["", "", "", "", "", "", "", "", ""];
// trueの場合はx, falseの場合はoのターン
let currentPlayer = true;
// マス目をクリックした際の処理
function handleCellClick(event) {
  const clickedSquare = event.target;
  const clickedSquareIndex = clickedSquare.dataset.index;
  // 埋まっているマスをクリックした際は処理を行わない
  if (gameState[clickedSquareIndex] !== "") {
    return;
  }
  handleCellPlayed(clickedSquare, clickedSquareIndex);
  //   Todo:勝敗が決着したか確認する必要がある。
}

// 対象のマス目に文字を表示する処理
function handleCellPlayed(square, index) {
  gameState[index] = currentPlayer ? "X" : "O";
  const xMark = '<span class="x-mark">X</span>';
  const oMark = '<span class="o-mark">O</span>';
  square.innerHTML = currentPlayer ? xMark : oMark;
  // xとoのターンを変更
  changePlayer();
}

function changePlayer() {
  currentPlayer = !currentPlayer;
}

document.querySelectorAll(".cell").forEach((square) => {
  square.addEventListener("click", handleCellClick);
});
