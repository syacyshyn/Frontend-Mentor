function getComputerChoice() {
    let arrayOfChoices = ["rock", "paper", "scissors"];
    return arrayOfChoices[Math.floor(Math.random() * 3)];
}

let computerScore = 0;
let playerScore = 0;

let playerScoreTextBox = document.getElementById("your-score");
let computerScoreTextBox = document.getElementById("opponent-score");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let whoBeatWhoTextBox = document.getElementById("who-beats-who-statement");
let chooseWiselyComponent = document.getElementById("choose-wisely-component");
let faceOffComponent = document.getElementById("face-off-component");
let winLoseComponent = document.getElementById("win-or-lose-component");
let winOrLoseTextBox = document.getElementById("win-or-lose-message");



function game() {
    faceOffComponent.style.display = "none";
    winLoseComponent.style.display = "none";
    rock.onclick = function () {
        let computerSelection = getComputerChoice();
        if (computerSelection === "paper") {
            computerScore++;
            computerScoreTextBox.innerText = `Computer Score: ${computerScore}`;
            whoBeatWhoTextBox.textContent = "Paper beats Rock!";
        } else if (computerSelection === "scissors") {
            playerScore++;
            playerScoreTextBox.innerText = `Your Score: ${playerScore}`;
            whoBeatWhoTextBox.textContent = "Rock beats Scissors!";
        } else if (computerSelection === "rock") {
            whoBeatWhoTextBox.textContent = "It's a tie!";
        }

        if ((computerScore + playerScore === 5 && computerScore > playerScore) || computerScore === 3) {
            winOrLoseTextBox.textContent = "You lose!"
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "none";
            winLoseComponent.style.display = "block";
        } else if ((computerScore + playerScore === 5 && computerScore < playerScore) || playerScore === 3) {
            winOrLoseTextBox.textContent = "You win!";
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "none";
            winLoseComponent.style.display = "block";
        } else {
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "flex";
            setTimeout(() => {
                chooseWiselyComponent.style.display = "flex"; faceOffComponent.style.display = "none";}, 1000);
        }
    }

    scissors.onclick = function () {
        let computerSelection = getComputerChoice();
        if (computerSelection === "paper") {
            playerScore++
            playerScoreTextBox.innerText = `Your Score: ${playerScore}`;
            whoBeatWhoTextBox.textContent = "Scissors beats Paper!";
        } else if (computerSelection === "rock") {
            computerScore++;
            computerScoreTextBox.innerText = `Computer Score: ${computerScore}`;
            whoBeatWhoTextBox.textContent = "Rock beats Scissors!";
        } else if (computerSelection === "scissors") {
            whoBeatWhoTextBox.textContent = "It's a tie!";
        }


        if ((computerScore + playerScore === 5 && computerScore > playerScore) || computerScore === 3) {
            winOrLoseTextBox.textContent = "You lose!"
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "none";
            winLoseComponent.style.display = "block";
        } else if ((computerScore + playerScore === 5 && computerScore < playerScore) || playerScore === 3) {
            winOrLoseTextBox.textContent = "You win!";
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "none";
            winLoseComponent.style.display = "block";
        } else {
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "flex";
            setTimeout(() => {
                chooseWiselyComponent.style.display = "flex"; faceOffComponent.style.display = "none";}, 1000);
        }
    }

    paper.onclick = function () {
        let computerSelection = getComputerChoice();
        if (computerSelection === "rock") {
            playerScore++;
            playerScoreTextBox.innerText = `Your Score: ${playerScore}`;
            whoBeatWhoTextBox.textContent = "Paper beats Rock!";
        } else if (computerSelection === "scissors") {
            computerScore++;
            computerScoreTextBox.innerText = `Computer Score: ${computerScore}`;
            whoBeatWhoTextBox.textContent = "Scissors beats Paper!";
        } else if (computerSelection === "paper") {
            whoBeatWhoTextBox.textContent = "It's a tie!";
        }

        if ((computerScore + playerScore === 5 && computerScore > playerScore) || computerScore === 3) {
            winOrLoseTextBox.innerHTML = "You lose!"
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "none";
            winLoseComponent.style.display = "block";
        } else if ((computerScore + playerScore === 5 && computerScore < playerScore) || playerScore === 3) {
            winOrLoseTextBox.innerHTML = "You win!";
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "none";
            winLoseComponent.style.display = "block";
        } else {
            chooseWiselyComponent.style.display = "none";
            faceOffComponent.style.display = "flex";
            setTimeout(() => {
                chooseWiselyComponent.style.display = "flex"; faceOffComponent.style.display = "none";}, 1000);
        }
    }

}

game();
