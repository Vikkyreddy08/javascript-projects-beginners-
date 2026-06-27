// guess number

let input = document.getElementById("inputput");
let guess = document.getElementById("guess");
let reset = document.getElementById("reset");
let display = document.getElementById("display");
let attemptsdisplay = document.getElementById("attempts");

let attempts = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

guess.addEventListener("click", () => {
    let userGuess = Number(input.value);

    attempts++;
    attemptsdisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess > randomNumber) {
        display.textContent = "Too High!";
    }
    else if (userGuess < randomNumber) {
        display.textContent = "Too Low!";
    }
    else {
        display.textContent = `Correct! You guessed it in ${attempts} attempts.`;
    }
});

reset.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsdisplay.textContent = "";
    display.textContent = "";
    input.value = "";
});