const targetWord = "najskarbuś"; // Słowo do odgadnięcia
const maxAttempts = 6;
let attempts = 0;

const board = document.getElementById("board");
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");

// Dynamicznie ustaw maksymalną długość słowa
guessInput.setAttribute("maxlength", targetWord.length);
guessInput.setAttribute("placeholder", `Wpisz słowo`);

// Tworzenie planszy
function createBoard() {
    board.innerHTML = "";
    const tilesCount = maxAttempts * targetWord.length;
    for (let i = 0; i < tilesCount; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
    }
    board.style.gridTemplateColumns = `repeat(${targetWord.length}, 40px)`;
}

// Sprawdzanie zgadywanego słowa
function checkGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess.length !== targetWord.length) {
        message.textContent = `Słowo musi mieć ${targetWord.length} liter`;
        return;
    }

    const row = attempts * targetWord.length;
    for (let i = 0; i < targetWord.length; i++) {
        const tile = board.children[row + i];
        tile.textContent = guess[i];

        if (guess[i] === targetWord[i]) {
            tile.classList.add("correct");
        } else if (targetWord.includes(guess[i])) {
            tile.classList.add("present");
        } else {
            tile.classList.add("absent");
        }
    }

    attempts++;
    guessInput.value = "";

    if (guess === targetWord) {
        message.textContent = "Zgadłaś! 🎉🥹";
        submitGuess.disabled = true;
        guessInput.disabled = true;
    } else if (attempts === maxAttempts) {
        message.textContent = `Niestety. Słowo to "${targetWord}".`;
        submitGuess.disabled = true;
        guessInput.disabled = true;
    }
}

// Obsługa kliknięcia przycisku
submitGuess.addEventListener("click", checkGuess);

// Inicjalizacja gry
createBoard();
