document.addEventListener('DOMContentLoaded', function() 
{
    let choiceButton1 = document.querySelector('.choiceButton1');
    let choiceButton2 = document.querySelector('.choiceButton2');
    let choiceButton3 = document.querySelector('.choiceButton3');
    let resultStatus1 = document.querySelector('.resultStatus1');
    let resultStatus2 = document.querySelector('.resultStatus2');
    let playerStatus = document.querySelector('.playerStatus');
    let computerStatus = document.querySelector('.computerStatus');
    let status1 = document.querySelector('.status1');
    let tryAgain = document.querySelector('.tryAgain');

    choiceButton1.addEventListener('click', function() 
    { 
        playerSelection = 'Rock'; 
        playGame();
        resultStatus1.textContent = playerScore;
        resultStatus2.textContent = computerScore;
        playerStatus.textContent = playerSelection;
        computerStatus.textContent = computerSelection;
        
    });
    choiceButton2.addEventListener('click', function() 
    {
        playerSelection = 'paper'; 
        playGame();
        resultStatus1.textContent = playerScore;
        resultStatus2.textContent = computerScore;
        playerStatus.textContent = playerSelection;
        computerStatus.textContent = computerSelection;
    });
    choiceButton3.addEventListener('click', function() 
    {
        playerSelection = 'scissors'; 
        playGame();
        resultStatus1.textContent = playerScore;
        resultStatus2.textContent = computerScore;
        playerStatus.textContent = playerSelection;
        computerStatus.textContent = computerSelection;
    });
    tryAgain.addEventListener('click', function() 
    {
        playerScore = 0;
        computerScore = 0;
        playerSelection = '';
        computerSelection = '';
        count = 0;
    
        // Clear any displayed content
        resultStatus1.textContent = '';
        resultStatus2.textContent = '';
        playerStatus.textContent = '';
        computerStatus.textContent = '';
        choiceButton1.style.display = 'block';
        choiceButton2.style.display = 'block';
        choiceButton3.style.display = 'block';
        tryAgain.style.display = 'none';
        status1.textContent = 'Choose';
    });

let playerSelection ='';
let playerScore = 0;
let computerScore = 0;    
let computerSelection ='';
let count =0;

function getComputerChoice() 
{
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) 
{
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

function playGame() 
{

    computerSelection = getComputerChoice();

        if (playerSelection) 
        {
            const result = playRound(playerSelection, computerSelection);
            if (result.includes('Win')) 
            {
                playerScore++;
                status1.textContent = 'You Win!'

            } else if (result.includes('Lose')) 
            {
                computerScore++;
                status1.textContent = 'You Lose!'
            }
            else 
            {
                console.log("It's a tie!");
                status1.textContent = "It's a tie!";
            }
        }
        if (count == 4)
        {
            choiceButton1.style.display = 'none';
            choiceButton2.style.display = 'none';
            choiceButton3.style.display = 'none';
            tryAgain.style.display = 'block';
    
            if (playerScore > computerScore) 
            {
                status1.textContent = "You win the game!";
            } else if (playerScore < computerScore) 
            {
                status1.textContent = "Computer wins the game!";
            } else 
            {
                status1.textContent = "It's a tie game!";
            }      
        }
        count++;
}
});

  
