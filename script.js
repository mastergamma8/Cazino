let balance = 1000;

document.getElementById("placeBet").addEventListener("click", function() {
    const betAmount = parseInt(document.getElementById("betAmount").value);
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
        alert("Введите корректную сумму ставки!");
        return;
    }

    const winningNumber = Math.floor(Math.random() * 37); // числа от 0 до 36
    const playerNumber = Math.floor(Math.random() * 37); // игрок выбирает случайное число

    let resultText = `Выпало число: ${winningNumber}. Вы ставили на: ${playerNumber}. `;
    
    if (winningNumber === playerNumber) {
        balance += betAmount * 35; // выигрыш
        resultText += "Поздравляем! Вы выиграли!";
    } else {
        balance -= betAmount; // проигрыш
        resultText += "К сожалению, вы проиграли.";
    }

    document.getElementById("balance").innerText = balance;
    document.getElementById("result").innerText = resultText;

    const history = document.getElementById("history");
    const listItem = document.createElement("li");
    listItem.innerText = resultText;
    history.appendChild(listItem);
    
    // Очистить поле для ставки
    document.getElementById("betAmount").value = '';
});
