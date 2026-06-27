const rollBtn = document.getElementById("rollBtn");

function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollDice() {

    const sides = Number(document.getElementById("diceType").value);
    const count = Number(document.getElementById("diceCount").value);
    const results = document.getElementById("results");

    const rolls = [];

    for (let i = 0; i < count; i++) {
        rolls.push(rollDie(sides));
    }

    let total = rolls.reduce((a, b) => a + b, 0);
    let average = total / count;

    results.innerHTML = `
        <p>Rolls: ${rolls.join(", ")}</p>
        <p><strong>Total: ${total}</strong></p>
        <p>Average: ${average.toFixed(2)}</p>
    `;
}

rollBtn.addEventListener("click", rollDice);