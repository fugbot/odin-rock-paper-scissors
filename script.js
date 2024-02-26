// console.log("hello world 2");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const btns = document.querySelectorAll("button.choice");
const resetBtn = document.querySelector("#reset");
const resultsList = document.querySelector("ul.resultsList");
const resultDiv = document.querySelector(".results");

let playerWonGames = 0;
let playerLostGames = 0;
let compWonGames = 0;
let compLostGames = 0;

let tiedGames = 0;
let maxWonGames = 5;
let totalGamesPlayed = 0;

const scorecard = document.querySelector(".scorecard");
    const win = document.querySelector(".winScore");
    const lose = document.querySelector(".loseScore");
    const tie = document.querySelector(".tieScore");
    const totalGames = document.querySelector(".gameScore");

    const winItem = document.createElement("div");
    const loseItem = document.createElement("div");
    const tieItem = document.createElement("div");
    const totalItem = document.createElement("div");

function createEmptyScoreCard(){
    //create score card value
    win.appendChild(winItem).textContent = playerWonGames;
    lose.appendChild(loseItem).textContent = playerLostGames;
    tie.appendChild(tieItem).textContent = tiedGames;
    totalGames.appendChild(totalItem).textContent = totalGamesPlayed;
}

createEmptyScoreCard();


btns.forEach((btn) => {
    /* btn.addEventListener("click", () => {
        const selection = btn.getAttribute('class');
        console.log(selection);
        //playRound(player, computer);
    
    }); */

    btn.addEventListener("click", function playChoice () {
        if (maxWonGames<=playerWonGames||maxWonGames<=compWonGames){
            //alert("again?");
            const endResult = document.createElement("div");
             if(playerWonGames > compWonGames){
                resultDiv.appendChild(endResult).textContent="You win! Do you want to play again? Click Reset button or a move button to start again.";
                
                //resultDiv.removeChild(endResult);
             }else {
                resultDiv.appendChild(endResult).textContent="You lost! Do you want to play again? Click Reset button or a move button to start again."; 
                
                //resultDiv.removeChild(endResult);
            }
            //btn.removeEventListener("click", playChoice);
            resetScore();
            //resultDiv.removeChild(endResult);
        } else {
            const playerSelection = btn.id;
            const computerSelection = getComputerChoice();

            
            

            const result = playRound(playerSelection, computerSelection);
            if(result.includes("Lose")){
                playerLostGames++;
                compWonGames++;
            }else if(result.includes("Win")){
                playerWonGames++;
                compLostGames++
            }else if(result.includes("Tie")){
                tiedGames++;
            }
            totalGamesPlayed++;

            printRoundResult(result);

            //print scorecard results
            printRoundScorecard(playerWonGames, playerLostGames, tiedGames, totalGamesPlayed);


        }
                 
        // console.log("player" + typeof playerSelection);
        // console.log("comp" + typeof computerSelection);
        //const result = playRound(playerSelection, computerSelection);
        //const result = playUntilFiveWon(playerSelection, computerSelection);

        


    });
});

resetBtn.addEventListener("click", resetScore);


function printRoundResult(result){
    
    const listItem = document.createElement("li");
    const listText = document.createElement("span");

    //give results as text to results list
    listItem.appendChild(listText);
    listText.textContent = result;
    resultsList.appendChild(listItem);
}

function printRoundScorecard(win, lose, tie, total){
    winItem.textContent = win;
    loseItem.textContent = lose;
    tieItem.textContent = tie;
    totalItem.textContent = total;
}

function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    // console.log(choice);
    return choice;
};

function playRound(playerSelection, computerSelection){

    console.log("Player: " + playerSelection + " Computer: " + computerSelection);
    if (playerSelection === computerSelection){
        return "Tie! You both selected " + playerSelection;
        //console.log("Tie! You both selected " + playerSelection);
    }
    else if(playerSelection === "scissors" && computerSelection == "rock" || 
            playerSelection === "rock" && computerSelection == "paper" ||
            playerSelection === "paper" && computerSelection == "scissors"){
        return "You Lose! " + computerSelection + " beats " + playerSelection;
        //console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    } else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
        //console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
}

function resetScore(){
    playerWonGames = 0;
    playerLostGames = 0;
    compWonGames = 0;
    compLostGames = 0;

    tiedGames = 0;
    totalGamesPlayed = 0;

    createEmptyScoreCard();
    
    //remove round result list
    resultsList.innerHTML = "";
   // endResult.innerHTML = "";
    //resultDiv.removeChild(endResult);
   
};

//does not work
function playUntilFiveWon(){
    let playerWonGames = 0;
    let playerLostGames = 0;
    let compWonGames = 0;
    let compLostGames = 0;
    
    let tiedGames = 0;
    let maxWonGames = 5;
    let totalGamesPlayed;

    for(totalGamesPlayed = 1; (maxWonGames<=playerWonGames)||(maxWonGames<=compWonGames); totalGamesPlayed++){
        let gameResult = playRound(player, computer);
        if(result.includes("Lose")){
            playerLostGames++;
            compWonGames++;
        }else if(result.includes("Win")){
            playerWonGames++;
            compLostGames++
        }else if(result.includes("Tie")){
            tiedGames++;
        }
    }
    return "Player: " + playerWonGames + "total: " + totalGamesPlayed;
    
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

