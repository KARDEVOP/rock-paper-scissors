function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex].toLowerCase();
}

//document.write(getComputerChoice() + "<br>");

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//const playerSelection = 'Rock';
//const computerSelection = getComputerChoice();
//document.write(playRound(playerSelection, computerSelection) + "<br>");

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
        else {
            console.log("It's a tie!");
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();

  
