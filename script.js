/*
1. Generate computer choice
2. Human input choice
3. Compare both choices
4. Play for 5 rounds
5. Winner is whoever reach 5 scores first
*/

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    // console.log(computerChoice);

    if(computerChoice === 2){
        return "rock";
    }else if(computerChoice === 1){
        return "paper";
    }else if(computerChoice === 0){
        return "scissors";
    }else{
        return "ERROR Generating Choice";
    }
}

// console.log(getComputerChoice());

function getHumanChoice(){
    const humanChoice = prompt("Rock || Paper || Scissors").toLowerCase();
    // console.log(humanChoice);
    if(humanChoice === 'rock' ||humanChoice === 'paper' ||humanChoice === 'scissors'){
        return humanChoice;
    }else{
        return "ERROR Input Choice";
    }
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(){
    const human = getHumanChoice();
    const computer = getComputerChoice();
    console.log(`Human ${human} vs Computer ${computer}`);

    if(human === computer){
        return "This round is tie";
    }else if(human === 'rock' && computer === 'scissors'){
        humanScore++
        // console.log(`H:${humanScore} vs C:${computerScore}`)
        return `You Win ${human} beat ${computer}`;
    }else if(human === 'paper' && computer === 'rock'){
        humanScore++
        // console.log(`H:${humanScore} vs C:${computerScore}`)
        return `You Win ${human} beat ${computer}`;
    }else if(human === 'scissors' && computer === 'paper'){
        humanScore++
        // console.log(`H:${humanScore} vs C:${computerScore}`)
        return `You Win ${human} beat ${computer}`;
    }else{
        computerScore++
        // console.log(`H:${humanScore} vs C:${computerScore}`)
        return `Computer Win ${computer} beat ${human}`;
    }
}
// console.log(playRound());

function playGame(){
    while(humanScore < 5 && computerScore < 5){
        playRound();
        console.log(`H:${humanScore} vs C:${computerScore}`)
    }
    if(humanScore === 5){
        return "Game Over, You Win this game";
    }else{
        return "Game Over, Computer Win this game";
    }
}

console.log(playGame());