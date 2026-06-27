const display = document.getElementById("display");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    display.textContent = `${h}:${m}:${s}`;
}

function startWatch() {

    if (timer !== null) return;

    timer = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);

}

function stopWatch() {
    clearInterval(timer);
    timer = null;
}

function resetWatch() {

    clearInterval(timer);

    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
}

startBtn.addEventListener("click", startWatch);

stopBtn.addEventListener("click", stopWatch);

resetBtn.addEventListener("click", resetWatch);