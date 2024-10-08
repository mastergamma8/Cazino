let balance = 1000; // Начальный баланс
const winningsHistory = [];

document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("loading-screen").style.display = "flex";
    
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("games-screen").style.display = "flex";
    }, 2000); // Задержка в 2 секунды
});

document.getElementById("roulette-button").addEventListener("click", function() {
    document.getElementById("games-screen").style.display = "none";
    document.getElementById("roulette-screen").style.display = "flex";
});

document.getElementById("spin-roulette").addEventListener("click", function() {
    const outcomes = ["Выигрыш!", "Проигрыш!", "Выигрыш!", "Проигрыш!"];
    const randomOutcomeIndex = Math.floor(Math.random() * outcomes.length);
    const outcome = outcomes[randomOutcomeIndex];
    
    document.getElementById("roulette-result-message").innerText = outcome;
});

document.getElementById("back-to-games-roulette").addEventListener("click", function() {
    document.getElementById("roulette-screen").style.display = "none";
    document.getElementById("games-screen").style.display = "flex";
});

document.getElementById("wheel-button").addEventListener("click", function() {
    document.getElementById("games-screen").style.display = "none";
    document.getElementById("wheel-screen").style.display = "flex";
});

document.getElementById("spin-wheel").addEventListener("click", function() {
    const betAmount = parseInt(document.getElementById("bet-amount").value);
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
        alert("Введите корректную сумму ставки.");
        return;
    }

    const prizes = [
        { name: "100 монет", value: 100 },
        { name: "200 монет", value: 200 },
        { name: "300 монет", value: 300 },
        { name: "400 монет", value: 400 },
        { name: "500 монет", value: 500 },
        { name: "600 монет", value: 600 },
        { name: "700 монет", value: 700 },
        { name: "800 монет", value: 800 },
        { name: "900 монет", value: 900 },
        { name: "1000 монет", value: 1000 },
    ];

    const randomPrizeIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomPrizeIndex];
    
    // Вращение колеса
    const wheel = document.getElementById("wheel");
    wheel.classList.add("spin");

    setTimeout(() => {
        wheel.classList.remove("spin");
        const totalWin = prize.value - betAmount;
        balance += totalWin; // Увеличиваем баланс
        winningsHistory.push(`Выиграли: ${prize.name}, Ставка: ${betAmount} монет. Выигрыш: ${totalWin} монет.`);
        document.getElementById("wheel-result-message").innerText = `Вы выиграли: ${prize.name}`;
        updateBalanceMessage();
        updateWinningsHistory();
    }, 2000); // Длительность вращения колеса
});

function updateBalanceMessage() {
    document.getElementById("balance-message").innerText = `Баланс: ${balance} монет`;
}

function updateWinningsHistory() {
    const historyElement = document.getElementById("winnings-history");
    historyElement.innerHTML = ""; // Очищаем историю
    winningsHistory.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        historyElement.appendChild(li);
    });
}

document.getElementById("back-to-games-wheel").addEventListener("click", function() {
    document.getElementById("wheel-screen").style.display = "none";
    document.getElementById("games-screen").style.display = "flex";
});
