let playerScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const randomNum =  Math.floor(Math.random() * 2)
    switch (randomNum) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2: 
            return "scissors"
    }
}

const getPlayerChoice = () => {
    const choice = prompt("Enter a choice")
    return choice.toLowerCase()
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === 'rock' && computerChoice === 'scissors' || 
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
            playerScore++
            console.log(`You win, ${playerChoice} beats ${computerChoice}`)
            return
        }
    else if (playerChoice === computerChoice) {
        console.log(`You tie`)
        return
    }
    else {
        computerScore++
        console.log(`You lose, ${computerChoice} beats ${playerChoice}`)
        return
    }
}

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()

        playRound(playerChoice, computerChoice)
    }
}

playGame()