// マス目の状態管理用の変数
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
// trueの場合はx, falseの場合はoのターン
let currentPlayer = true;
// 勝利条件
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// マス目をクリックした際の処理
function handleCellClick(event) {
  const clickedSquare = event.target;
  const clickedSquareIndex = clickedSquare.dataset.index;
  // 埋まっているマスをクリックした際は処理を行わない
  // ゲームが終了している場合は処理を行わない
  if (gameState[clickedSquareIndex] !== "" || !gameActive) {
    return;
  }
  handleCellPlayed(clickedSquare, clickedSquareIndex);
  //   Todo:勝敗が決着したか確認する必要がある。
  checkWin();
}

// 対象のマス目に文字を表示する処理
function handleCellPlayed(square, index) {
  gameState[index] = currentPlayer ? "X" : "O";
  const xMark = '<span class="x-mark">X</span>';
  const oMark = '<span class="o-mark">O</span>';
  square.innerHTML = currentPlayer ? xMark : oMark;
  // xとoのターンを変更
  // changePlayer();
}

function changePlayer() {
  currentPlayer = !currentPlayer;
}

function checkWin() {
  let roundWon = false;
  let winningPattern = [];
  // 全ての勝利条件を走査
  for (let i = 0; i < winningConditions.length; i++) {
    const [first, second, third] = winningConditions[i];
    const firstValue = gameState[first];
    const secondValue = gameState[second];
    const thirdValue = gameState[third];
    // 勝利条件となるマス目のどれかが空の場合はスキップ
    if (firstValue === "" || secondValue === "" || thirdValue === "") {
      continue;
    }
    // 勝利条件となるマス目が同じ文字で埋まっている場合は勝利
    if (firstValue === secondValue && secondValue === thirdValue) {
      roundWon = true;
      winningPattern = [first, second, third];
      // 勝者が確定した場合はループを抜ける
      break;
    }
  }

  // 勝者が確定した時点で決着のメッセージを表示
  if (roundWon) {
    gameActive = false;
    const winningMessage = `決着しました。<br>勝者はプレイヤー：${
      currentPlayer ? "X" : "O"
    }です。`;
    document.getElementById("status").innerHTML = winningMessage;
    return;
  }
  // この時点で全てのマス目が埋まっている場合は引き分け
  const roundDraw = !gameState.includes("");
  if (roundDraw) {
    gameActive = false;
    document.getElementById("status").innerHTML = "引き分けです。";
    return;
  }
  // 決着がつかず、ゲームが続行する場合はプレイヤーを交代
  changePlayer();
}

document.querySelectorAll(".cell").forEach((square) => {
  square.addEventListener("click", handleCellClick);
});
