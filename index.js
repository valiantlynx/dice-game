var diceNumber = Math.floor((Math.random() * 6)) + 1;
var diceNumber2 = Math.floor((Math.random() * 6)) + 1;

function reloadGame() {
    document.querySelector(".img1").setAttribute("src", ("images/dice" + diceNumber + ".png"));
    document.querySelector(".img2").setAttribute("src", ("images/dice" + diceNumber2 + ".png"));
    if (diceNumber < diceNumber2) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";

    } else if (diceNumber === diceNumber2) {
        document.querySelector("h1").textContent = "Draw!";

    } else {
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";

    }
}
reloadGame();