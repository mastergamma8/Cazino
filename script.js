let balance = 0; // Начальный баланс
const winningsHistory = [];
const users = {}; // Словарь для хранения пользователей

// Показать экран регистрации
function showRegistrationScreen() {
    hideAllScreens();
    document.getElementById("registration-screen").style.display = "flex";
}

// Показать экран входа
function showLoginScreen() {
    hideAllScreens();
    document.getElementById("login-screen").style.display = "flex";
}

// Скрыть все экраны
function hideAllScreens() {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.style.display = "none";
    });
}

// Обновить сообщение о балансе
function updateBalanceMessage() {
    document.getElementById("balance-message").innerText = `Баланс: ${balance} рублей`;
}

// Проверка на существование пользователя
function isUserExist(username) {
    return users.hasOwnProperty(username);
}

// Проверка пароля
function isPasswordCorrect(username, password) {
    return users[username] === password;
}

// Сохранение пользователя
function saveUser(username, password) {
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
}

// Загрузка пользователей из локального хранилища
function loadUsers() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
        Object.assign(users, JSON.parse(savedUsers));
    }
}

// Сбросить баланс
function resetBalance() {
    balance = 0; // Сбрасываем баланс
    updateBalanceMessage();
    winningsHistory.length = 0; // Очищаем историю выигрышей
    updateWinningsHistory();
}

// Показать экран игр
function showGamesScreen() {
    hideAllScreens();
    document.getElementById("games-screen").style.display = "flex";
    updateBalanceMessage();
}

document.getElementById("start-button").addEventListener("click", function() {
    loadUsers(); // Загружаем пользователей при старте
    hideAllScreens();
    document.getElementById("loading-screen").style.display = "flex";
    
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        showLoginScreen(); // Показать экран входа
    }, 2000);
});

document.getElementById("register-button").addEventListener("click", function() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (username && password) {
        if (isUserExist(username)) {
            alert("Пользователь с таким именем уже существует!");
        } else {
            saveUser(username, password);
            alert("Регистрация успешна! Теперь вы можете войти.");
            showLoginScreen(); // Перейти к экрану входа
        }
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});

document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (isUserExist(username) && isPasswordCorrect(username, password)) {
        alert("Вход успешен!");
        balance = 1000; // Начальный баланс после входа
        showGamesScreen();
    } else {
        alert("Неверное имя пользователя или пароль.");
    }
});

document.getElementById("back-to-welcome").addEventListener("click", function() {
    showLoginScreen(); // Вернуться на экран регистрации
});

document.getElementById("back-to-welcome-login").addEventListener("click", function() {
    hideAllScreens();
    document.getElementById("welcome-screen").style.display = "flex";
});

document.getElementById("roulette-button").addEventListener("click", function() {
    hideAllScreens();
    document.getElementById("roulette-screen").style.display = "flex";
});

document.getElementById("spin-roulette").addEventListener("
