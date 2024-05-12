let playerScore = 0
let computerScore = 0

// randomizes a choice for the computer
const getComputerChoice = () => {
    const randomNum =  Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2: 
            return "scissors"
    }
}
  
const displayScore = () => {
    domPlayerScore.textContent = "Player: " + playerScore
    domComputerScore.textContent = "Computer: " + computerScore
    return
}


const gameOver = () => playerScore === 5 || computerScore === 5

const endgameUI = () => {
    playerScore === 5 ? gameDesc.textContent = "You won against the computer" : gameDesc.textContent = "Computer won against you"
    restartBtn.textContent = "Play again"
    buttonContainer.after(restartBtn)
    restartBtn.addClass("restart-btn")
    return
}

// calculates who wins the round and increment the score accordingly
const playRound = (playerChoice, computerChoice) => {
    if (!gameOver()) {
        if (playerChoice === 'rock' && computerChoice === 'scissors' || 
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
            playerScore++
            gameDesc.textContent = (`You win, ${playerChoice} beats ${computerChoice}`)
            displayScore()
        }
        else if (playerChoice === computerChoice) {
            gameDesc.textContent = (`You tie`)
        }
        else {
            computerScore++
            gameDesc.textContent = (`You lose, ${computerChoice} beats ${playerChoice}`)
            displayScore()  
        }
    }
    else {
        endgameUI()
    }
    if (gameOver()) {
        endgameUI()
    }
    return

}

const restartGame = () => {
    playerScore = 0
    computerScore = 0
    gameDesc.textContent = ""
    displayScore()
    restartBtn.remove()
}



// query selectors
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const domPlayerScore = document.getElementById('player-score')
const domComputerScore = document.getElementById('computer-score')
const gameDesc = document.getElementById('game-desc')
const buttonContainer = document.getElementById('button-container')

// event listeners
rock.addEventListener('click', () => playRound('rock', getComputerChoice()))
paper.addEventListener('click', () => playRound('paper', getComputerChoice()))
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()))

// restart button
const restartBtn = document.createElement('button')

restartBtn.addEventListener('click', () => restartGame())