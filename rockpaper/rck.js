const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

const choices = ["Rock", "Paper", "Scissors"];

rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));

function playGame(user) {

    const randomIndex = Math.floor(Math.random() * 3);
    const computer = choices[randomIndex];

    userChoice.textContent = "You: " + user;
    computerChoice.textContent = "Computer: " + computer;

    if (user === computer) {
        result.textContent = "Draw!";
    }
    else if (
        (user === "Rock" && computer === "Scissors") ||
        (user === "Paper" && computer === "Rock") ||
        (user === "Scissors" && computer === "Paper")
    ) {
        result.textContent = "You Win!";
    }
    else {
        result.textContent = "Computer Wins!";
    }
}