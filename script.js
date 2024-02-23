// console.log("hello world 2");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    /* btn.addEventListener("click", () => {
        const selection = btn.getAttribute('class');
        console.log(selection);
        //playRound(player, computer);
    
    }); */

    btn.addEventListener("click", () => {
        const playerSelection = btn.className;
        const computerSelection = getComputerChoice();
        // console.log("player" + typeof playerSelection);
        // console.log("comp" + typeof computerSelection);
        playRound(playerSelection, computerSelection);
    });
});

const results = document.querySelector(".results");


function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    // console.log(choice);
    return choice;
};

function playRound(playerSelection, computerSelection){

    console.log("Player: " + playerSelection + " Computer: " + computerSelection);
    if (playerSelection === computerSelection){
        //return "Tie! You both selected " + playerSelection;
        console.log("Tie! You both selected " + playerSelection);
    }
    else if(playerSelection === "scissors" && computerSelection == "rock" || 
            playerSelection === "rock" && computerSelection == "paper" ||
            playerSelection === "paper" && computerSelection == "scissors"){
        //return "You Lose! " + computerSelection + " beats " + playerSelection;
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    } else {
        //return "You Win! " + playerSelection + " beats " + computerSelection;
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
}

/* function playGame(playerSelection, computerSelection){
   
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
    

} */

getComputerChoice();

// const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
// const computerSelection = getComputerChoice().toLowerCase();

// console.log(playRound(playerSelection, computerSelection));

//playGame();