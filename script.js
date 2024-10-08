// Переход на экран загрузки
document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("loading-screen").style.display = "flex";
    
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("games-screen").style.display = "flex";
    }, 2000); // Задержка в 2 секунды
});

// Переход на экран Рулетки
document.getElementById("roulette-button").addEventListener("click", function() {
    document.getElementById("games-screen").style.display = "none";
    document.getElementById("roulette-screen").style.display = "flex";
});

// Логика рулетки
document.getElementById("spin-roulette").addEventListener("click", function() {
    const outcomes = ["Выигрыш!", "Проигрыш!", "Выигрыш!", "Проигрыш!"];
    const randomOutcomeIndex = Math.floor(Math.random() * outcomes.length);
    const outcome = outcomes[randomOutcomeIndex];
    
    document.getElementById("roulette-result-message").innerText = outcome;
});

// Назад к играм для Рулетки
document.getElementById("back-to-games-roulette").addEventListener("click", function() {
    document.getElementById("roulette-screen").style.display = "none";
    document.getElementById("games-screen").style.display = "flex";
});

// Переход на экран Колеса Фортуны
document.getElementById("wheel-button").addEventListener("click", function() {
    document.getElementById("games-screen").style.display = "none";
    document.getElementById("wheel-screen").style.display = "flex";
});

// Логика вращения Колеса Фортуны
document.getElementById("spin-wheel").addEventListener("click", function() {
    const prizes = [
        "100 монет",
        "200 монет",
        "300 монет",
        "400 монет",
        "500 монет",
        "600 монет",
        "700 монет",
        "800 монет",
        "900 монет",
        "1000 монет",
    ];
    const randomPrizeIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomPrizeIndex];

    // Вращение колеса
    const wheel = document.getElementById("wheel");
    wheel.classList.add("spin");

    // Убираем анимацию через 2 секунды, чтобы вернуть его в начальное положение
    setTimeout(() => {
        wheel.classList.remove("spin");
        document.getElementById("wheel-result-message").innerText = `Вы выиграли: ${prize}`;
    }, 2000); // Длительность вращения колеса
});

// Назад к играм для Колеса Фортуны
document.getElementById("back-to-games-wheel").addEventListener("click", function() {
    document.getElementById("wheel-screen").style.display = "none";
    document.getElementById("games-screen").style.display = "flex";
});
