let player1Choice = null;
let player2Choice = null;

function playerOne(choice) {
  player1Choice = choice;
  document.getElementById("player1Choice").innerHTML = choice;
}
function playerTwo(choice) {
    player2Choice = choice;
    document.getElementById("player2Choice").innerHTML = choice;
    getResult();
}
  
function getResult() {
    if (player1Choice === null || player2Choice === null) {
    return;
}

let resultText = "";
  
if (player1Choice === player2Choice) {
    resultText = "It's a tie!";
} else if (
    (player1Choice === "Rock" && player2Choice === "Scissors") ||
    (player1Choice === "Paper" && player2Choice === "Rock") ||
    (player1Choice === "Scissors" && player2Choice === "Paper")
    ) {
    resultText = "Player 1 wins!";
} else {
    resultText = "Player 2 wins!";
}
  
document.getElementById("resultText").innerHTML = resultText;
}
function resetGame() {
    player1Choice = null;
    player2Choice = null;
    document.getElementById("player1Choice").innerHTML = "-";
    document.getElementById("player2Choice").innerHTML = "-";
    document.getElementById("resultText").innerHTML = "-";
}
  