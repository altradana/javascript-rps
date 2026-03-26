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

console.log(getComputerChoice());