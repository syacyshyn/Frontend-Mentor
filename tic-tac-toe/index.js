const arrayOfIndividualSquareElements = document.getElementsByClassName("individual-tic-tac-toe-square");
const mapOfIdsAndElements = htmlCollectionOfElementsTurnedIntoMap(arrayOfIndividualSquareElements);
const turnButton = document.getElementById("turn-button");
let roundCounter = 1;
const winnerScreen = document.getElementById("winner-screen");
let playersTurn = "X";
let winner;
turnButton.innerText = `${playersTurn} TURN`;
let xScoreElement = document.getElementById("x-score");
let oScoreElement = document.getElementById("o-score");
let tieScoreElement = document.getElementById("tie-score");
let refreshButton = document.getElementById("refresh-button");
let xScore = 0;
let oScore = 0;
let tiesScore = 0;

function htmlCollectionOfElementsTurnedIntoMap(arrayOfHtmlElements) {
    const mapOfIdsAndElements = new Map();
    for (let element of arrayOfHtmlElements) {
        mapOfIdsAndElements.set(element.id, element);
    }
    return mapOfIdsAndElements;
}

// Note: This function might not even be needed if the computer is playing so quickly after the user.
function switchTurns() {
    if (playersTurn === "X") {
        playersTurn = "O";
        turnButton.innerText = `${playersTurn} TURN`;
    } else {
        playersTurn = "X";
        turnButton.innerText = `${playersTurn} TURN`;
    }
}

function pickRandomCornerSquare() {
    let availableCornerSquares = [mapOfIdsAndElements.get("top-right-square"),
        mapOfIdsAndElements.get("top-left-square"), mapOfIdsAndElements.get("bottom-right-square"),
        mapOfIdsAndElements.get("bottom-left-square")];
    let randomNumber = Math.floor(Math.random() * (availableCornerSquares.length));
    availableCornerSquares[randomNumber].innerText = "O";
    availableCornerSquares[randomNumber].disabled = true;
}

function cornersAreEmpty() {
    return (mapOfIdsAndElements.get("top-right-square").innerText === "" &&
        mapOfIdsAndElements.get("top-left-square").innerText === "" &&
        mapOfIdsAndElements.get("bottom-right-square").innerText === "" &&
        mapOfIdsAndElements.get("bottom-left-square").innerText === "");
}

function rowOfTwo() {
    let isTrue = false;
    let elementToBlockOrWin = null;
    let symbol = null;
    if ((mapOfIdsAndElements.get("top-left-square").innerText ===
            mapOfIdsAndElements.get("top-middle-square").innerText) &&
        mapOfIdsAndElements.get("top-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-right-square");
        symbol = mapOfIdsAndElements.get("top-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    if ((mapOfIdsAndElements.get("top-left-square").innerText ===
            mapOfIdsAndElements.get("top-right-square").innerText) &&
        mapOfIdsAndElements.get("top-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-middle-square");
        symbol = mapOfIdsAndElements.get("top-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    if ((mapOfIdsAndElements.get("top-middle-square").innerText ===
            mapOfIdsAndElements.get("top-right-square").innerText) &&
        mapOfIdsAndElements.get("top-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-left-square");
        symbol = mapOfIdsAndElements.get("top-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    if ((mapOfIdsAndElements.get("middle-left-square").innerText ===
            mapOfIdsAndElements.get("middle-middle-square").innerText) &&
        mapOfIdsAndElements.get("middle-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-right-square");
        symbol = mapOfIdsAndElements.get("middle-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    if ((mapOfIdsAndElements.get("middle-left-square").innerText ===
            mapOfIdsAndElements.get("middle-right-square").innerText) &&
        mapOfIdsAndElements.get("middle-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-middle-square");
        symbol = mapOfIdsAndElements.get("middle-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    if ((mapOfIdsAndElements.get("middle-middle-square").innerText ===
            mapOfIdsAndElements.get("middle-right-square").innerText) &&
        mapOfIdsAndElements.get("middle-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-left-square");
        symbol = mapOfIdsAndElements.get("middle-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    if ((mapOfIdsAndElements.get("bottom-left-square").innerText ===
            mapOfIdsAndElements.get("bottom-middle-square").innerText) &&
        mapOfIdsAndElements.get("bottom-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-right-square");
        symbol = mapOfIdsAndElements.get("bottom-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    if ((mapOfIdsAndElements.get("bottom-left-square").innerText ===
            mapOfIdsAndElements.get("bottom-right-square").innerText) &&
        mapOfIdsAndElements.get("bottom-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-middle-square");
        symbol = mapOfIdsAndElements.get("bottom-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    if ((mapOfIdsAndElements.get("bottom-middle-square").innerText ===
            mapOfIdsAndElements.get("bottom-right-square").innerText) &&
        mapOfIdsAndElements.get("bottom-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-left-square");
        symbol = mapOfIdsAndElements.get("bottom-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    return [isTrue, elementToBlockOrWin, symbol];
}

function columnOfTwo() {
    let isTrue = false;
    let elementToBlockOrWin = null;
    let symbol = null;
    if ((mapOfIdsAndElements.get("top-left-square").innerText ===
            mapOfIdsAndElements.get("middle-left-square").innerText) &&
        mapOfIdsAndElements.get("top-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-left-square");
        symbol = mapOfIdsAndElements.get("top-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-left-square").innerText ===
            mapOfIdsAndElements.get("bottom-left-square").innerText) &&
        mapOfIdsAndElements.get("top-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-left-square");
        symbol = mapOfIdsAndElements.get("top-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("middle-left-square").innerText ===
            mapOfIdsAndElements.get("bottom-left-square").innerText) &&
        mapOfIdsAndElements.get("middle-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-left-square");
        symbol = mapOfIdsAndElements.get("bottom-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-middle-square").innerText ===
            mapOfIdsAndElements.get("middle-middle-square").innerText) &&
        mapOfIdsAndElements.get("top-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-middle-square");
        symbol = mapOfIdsAndElements.get("top-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-middle-square").innerText ===
            mapOfIdsAndElements.get("bottom-middle-square").innerText) &&
        mapOfIdsAndElements.get("top-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-middle-square");
        symbol = mapOfIdsAndElements.get("top-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("middle-middle-square").innerText ===
            mapOfIdsAndElements.get("bottom-middle-square").innerText) &&
        mapOfIdsAndElements.get("middle-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-middle-square");
        symbol = mapOfIdsAndElements.get("bottom-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-right-square").innerText ===
            mapOfIdsAndElements.get("middle-right-square").innerText) &&
        mapOfIdsAndElements.get("top-right-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-right-square");
        symbol = mapOfIdsAndElements.get("top-right-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-right-square").innerText ===
            mapOfIdsAndElements.get("bottom-right-square").innerText) &&
        mapOfIdsAndElements.get("top-right-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-right-square");
        symbol = mapOfIdsAndElements.get("top-right-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("middle-right-square").innerText ===
            mapOfIdsAndElements.get("bottom-right-square").innerText) &&
        mapOfIdsAndElements.get("middle-right-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-right-square");
        symbol = mapOfIdsAndElements.get("bottom-right-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    return [isTrue, elementToBlockOrWin, symbol];
}

function diagonalOfTwo() {
    let isTrue = false;
    let elementToBlockOrWin = null;
    let symbol = null;
    if ((mapOfIdsAndElements.get("top-left-square").innerText ===
            mapOfIdsAndElements.get("middle-middle-square").innerText) &&
        mapOfIdsAndElements.get("top-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-right-square");
        symbol = mapOfIdsAndElements.get("top-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-left-square").innerText ===
            mapOfIdsAndElements.get("bottom-right-square").innerText) &&
        mapOfIdsAndElements.get("top-left-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-middle-square");
        symbol = mapOfIdsAndElements.get("top-left-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("middle-middle-square").innerText ===
            mapOfIdsAndElements.get("bottom-right-square").innerText) &&
        mapOfIdsAndElements.get("middle-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-left-square");
        symbol = mapOfIdsAndElements.get("bottom-right-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-right-square").innerText ===
            mapOfIdsAndElements.get("middle-middle-square").innerText) &&
        mapOfIdsAndElements.get("top-right-square").innerText !== "" &&
        mapOfIdsAndElements.get("bottom-left-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("bottom-left-square");
        symbol = mapOfIdsAndElements.get("top-right-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("top-right-square").innerText ===
            mapOfIdsAndElements.get("bottom-left-square").innerText) &&
        mapOfIdsAndElements.get("top-right-square").innerText !== "" &&
        mapOfIdsAndElements.get("middle-middle-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("middle-middle-square");
        symbol = mapOfIdsAndElements.get("top-right-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    } else if ((mapOfIdsAndElements.get("middle-middle-square").innerText ===
            mapOfIdsAndElements.get("bottom-left-square").innerText) &&
        mapOfIdsAndElements.get("middle-middle-square").innerText !== "" &&
        mapOfIdsAndElements.get("top-right-square").innerText === "") {
        isTrue = true;
        elementToBlockOrWin = mapOfIdsAndElements.get("top-right-square");
        symbol = mapOfIdsAndElements.get("middle-middle-square").innerText;
        if (symbol === "O") {
            return [isTrue, elementToBlockOrWin, symbol];
        }
    }
    return [isTrue, elementToBlockOrWin, symbol];
}

function checkForWinner() {
    if (mapOfIdsAndElements.get("top-left-square").innerText ===
        mapOfIdsAndElements.get("top-middle-square").innerText &&
        mapOfIdsAndElements.get("top-left-square").innerText === mapOfIdsAndElements.get("top-right-square").innerText &&
        mapOfIdsAndElements.get
        ("top-right-square").innerText !== "") {
        winner = mapOfIdsAndElements.get("top-left-square").innerText;
    } else if (mapOfIdsAndElements.get("middle-left-square").innerText ===
        mapOfIdsAndElements.get("middle-middle-square").innerText &&
        mapOfIdsAndElements.get("middle-left-square").innerText === mapOfIdsAndElements.get("middle-right-square").innerText &&
        mapOfIdsAndElements.get
        ("middle-right-square").innerText !== "") {
        winner = mapOfIdsAndElements.get("middle-middle-square").innerText;
    } else if (mapOfIdsAndElements.get("bottom-left-square").innerText ===
        mapOfIdsAndElements.get("bottom-middle-square").innerText &&
        mapOfIdsAndElements.get("bottom-left-square").innerText === mapOfIdsAndElements.get("bottom-right-square").innerText &&
        mapOfIdsAndElements.get
        ("bottom-right-square").innerText !== "") {
        winner = mapOfIdsAndElements.get("bottom-left-square").innerText;
    } else if (mapOfIdsAndElements.get("top-left-square").innerText ===
        mapOfIdsAndElements.get("middle-left-square").innerText &&
        mapOfIdsAndElements.get("top-left-square").innerText === mapOfIdsAndElements.get("bottom-left-square").innerText &&
        mapOfIdsAndElements.get
        ("top-left-square").innerText !== "") {
        winner = mapOfIdsAndElements.get("top-left-square").innerText;
    } else if (mapOfIdsAndElements.get("top-middle-square").innerText ===
        mapOfIdsAndElements.get("middle-middle-square").innerText &&
        mapOfIdsAndElements.get("top-middle-square").innerText === mapOfIdsAndElements.get("bottom-middle-square").innerText &&
        mapOfIdsAndElements.get
        ("bottom-middle-square").innerText !== "") {
        winner = mapOfIdsAndElements.get("bottom-middle-square").innerText;
    } else if (mapOfIdsAndElements.get("top-right-square").innerText ===
        mapOfIdsAndElements.get("middle-right-square").innerText &&
        mapOfIdsAndElements.get("top-right-square").innerText === mapOfIdsAndElements.get("bottom-right-square").innerText &&
        mapOfIdsAndElements.get
        ("top-right-square").innerText !== "") {
        winner = mapOfIdsAndElements.get("top-right-square").innerText;
    } else if (mapOfIdsAndElements.get("top-left-square").innerText ===
        mapOfIdsAndElements.get("middle-middle-square").innerText &&
        mapOfIdsAndElements.get("top-left-square").innerText === mapOfIdsAndElements.get("bottom-right-square").innerText &&
        mapOfIdsAndElements.get
        ("top-left-square").innerText !== "") {
        winner = mapOfIdsAndElements.get("top-left-square").innerText;
    } else if (mapOfIdsAndElements.get("top-right-square").innerText ===
        mapOfIdsAndElements.get("middle-middle-square").innerText &&
        mapOfIdsAndElements.get("top-right-square").innerText === mapOfIdsAndElements.get("bottom-left-square").innerText &&
        mapOfIdsAndElements.get
        ("top-right-square").innerText !== "") {
        winner = mapOfIdsAndElements.get("top-right-square").innerText;
    }
    if (winner === "X") {
        winnerScreen.innerText = "You win!";
        winnerScreen.style.display = "flex";
        xScore++;
        xScoreElement.innerText = `X (YOU) \n ${xScore}`

    } else if (winner === "O") {
        winnerScreen.innerText = "Opponent wins!";
        winnerScreen.style.display = "flex";
        oScore++;
        oScoreElement.innerText = `O (CPU) \n ${oScore}`
    }
}

function pickRandomOpenSquare() {
    let arrayOfOpenSquares = [];
    for (let [_, value] of mapOfIdsAndElements) {
        if (value.innerText === "") {
            arrayOfOpenSquares.push(value);
        }
    }
    let randomNumber = Math.floor(Math.random() * (arrayOfOpenSquares.length));
    arrayOfOpenSquares[randomNumber].innerText = "O";
    arrayOfOpenSquares[randomNumber].disabled = true;
}

function determinePossibleWins() {
    let horizontalResults = rowOfTwo();
    let verticalResults = columnOfTwo();
    let diagonalResults = diagonalOfTwo();
    if (horizontalResults[2] !== null) {
        horizontalResults[1].innerText = "O";
        horizontalResults[1].disabled = true;
    } else if (verticalResults[2] !== null) {
        verticalResults[1].innerText = "O";
        verticalResults[1].disabled = true;
    } else if (diagonalResults[2] !== null) {
        diagonalResults[1].innerText = "O";
        diagonalResults[1].disabled = true;
    } else {
        pickRandomOpenSquare();
    }
}

// console.log(pickRandomCornerSquare(arrayOfIndividualSquareElements));
function computerTurnToPlay() {
    if (roundCounter === 1 && cornersAreEmpty()) {
        pickRandomCornerSquare();
    } else if (roundCounter === 1 && mapOfIdsAndElements.get("middle-middle-square").innerText === "") {
        mapOfIdsAndElements.get("middle-middle-square").innerText = "O";
        mapOfIdsAndElements.get("middle-middle-square").disabled = true;
    } else {
        determinePossibleWins();
    }
    checkForWinner();
    roundCounter++;
    switchTurns();
}

for (let element of arrayOfIndividualSquareElements) {
    element.onclick = function () {
        if (!element.disabled) {
            if (playersTurn === "X") {
                element.innerText = "X";
            }
            checkForWinner();
            if (roundCounter === 5 && winner === undefined) {
                winnerScreen.innerText = "It's a tie!";
                winnerScreen.style.display = "flex";
                tiesScore++;
                tieScoreElement.innerText = `TIES \n ${tiesScore}`
            }
            if (winner === undefined) {
                switchTurns();
                setTimeout(computerTurnToPlay, 1000);
            }
            element.disabled = true;
        }
    }
}

refreshButton.onclick = function () {
    winnerScreen.style.display = "none";
    for (let element of arrayOfIndividualSquareElements) {
        element.disabled = false;
        element.innerText = "";
    }
    playersTurn = "X";
    roundCounter = 1;
    winner = undefined;
}