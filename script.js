const options = ["rock" , "paper" , "scissors"];
const results = document.querySelector(".results");
const menu = document.querySelector(".player-options");

var player_score = 0;
var comp_score = 0;

menu.addEventListener('click' , function(event) {
    updateScore(round(event.target.id));

});


function updateScore(winner) {
    if (winner == "player") {player_score++} else if (winner == "computer") {comp_score++}
    results.textContent = `${winner} won this round. The score is ${player_score} : ${comp_score}`;
    if (player_score >= 5 || comp_score >=5) {
    if (player_score > comp_score) {
        results.textContent = `Player wins with ${player_score} points`
    } else {results.textContent = `Computer wins with ${comp_score}`}
}
};


function round(playerChoice) {
        var computerChoice = options[Math.floor(Math.random()*3 + 1) -1];
        console.log("Player chose " + playerChoice + ", Computer chose " + computerChoice);

        switch (playerChoice) {
            case "rock":
                if (computerChoice == "scissors") {
                    console.log("Player wins!");
                    return "player";
                } else if (computerChoice == "paper") {
                    console.log("Computer wins!");
                    return "computer";
                } else if (playerChoice == computerChoice) {
                    console.log("It was a tie!");
                    return "tie";
                }
            
            case "scissors":
                if (computerChoice == "paper") {
                    console.log("Player wins!");
                    return "player";
                } else if (computerChoice == "rock") {
                    console.log("Computer wins!");
                    return "computer";
                } else if (playerChoice == computerChoice) {
                    console.log("It was a tie!");
                    return "computer";
                }

            case "paper":
                if (computerChoice == "rock") {
                    console.log("Player wins!");
                    return "player";
                } else if (computerChoice == "scissors") {
                    console.log("Computer wins!");
                    return "computer";
                } else if (playerChoice == computerChoice) {
                    console.log("It was a tie!");
                    return "computer";
                }
            
        }

}; 