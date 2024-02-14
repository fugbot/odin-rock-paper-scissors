console.log("hello world 2");

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    // console.log(choice);
    return choice;
};

function playRound(playerSelection, computerSelection){

    console.log("Player: " + playerSelection + " Computer: " + computerSelection);
    if (playerSelection === computerSelection){
        alert('Tie! You both selected ' + playerSelection);
    }
    else if(playerSelection === "scissors" && computerSelection == "rock" || 
            playerSelection === "rock" && computerSelection == "paper" ||
            playerSelection === "paper" && computerSelection == "scissors"){
        alert('You Lose! ' + computerSelection + " beats " + playerSelection);
    } else {
        alert('You Win! ' + playerSelection + " beats " + computerSelection);
    }
}

getComputerChoice();

const playerSelection = "rOck".toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

playRound(playerSelection, computerSelection);