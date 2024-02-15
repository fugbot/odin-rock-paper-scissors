// console.log("hello world 2");

function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    // console.log(choice);
    return choice;
};

function playRound(playerSelection, computerSelection){

    console.log("Player: " + playerSelection + " Computer: " + computerSelection);
    if (playerSelection === computerSelection){
        return "Tie! You both selected " + playerSelection;
    }
    else if(playerSelection === "scissors" && computerSelection == "rock" || 
            playerSelection === "rock" && computerSelection == "paper" ||
            playerSelection === "paper" && computerSelection == "scissors"){
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

function playGame(playerSelection, computerSelection){
    
    //start from 0 games played
    //play round
    //check if win/lose
    //add 1 game to win/lose
    //add 1 to total
    //when 5 games total - end 
    //let totalGamesPlayed = 0;
    let wonGames = 0;
    let tiedGames = 0;
    let lostGames = 0;
    let maxGames = 5;    

    for(let totalGamesPlayed = 1; totalGamesPlayed <= maxGames; totalGamesPlayed++){
        const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        let result = playRound(playerSelection, computerSelection);
        if(result.includes("Lose")){
            lostGames++;
        }else if(result.includes("Win")){
            wonGames++;
        }else if(result.includes("Tie")){
            tiedGames++;
        }
        console.log(result);
        console.log("Number of games played: " + totalGamesPlayed);
        console.log("Number of wins: " + wonGames);
        console.log("Number of loses: " + lostGames);
        console.log("Number of ties: " + tiedGames);
    }

    if(wonGames>lostGames){
        console.log("You won the game with " + wonGames + "!");
    }else {
        console.log("You lost the game.")
    }
    

}

getComputerChoice();

// const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
// const computerSelection = getComputerChoice().toLowerCase();

// console.log(playRound(playerSelection, computerSelection));

playGame();