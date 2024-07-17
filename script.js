const options = ["rock" , "paper" , "scissors"];

function startGame() {
    var score = 0;
    var compScore = 0;
    for (round = 1; round <= 10; round++) {
        console.log("Round Number :" + round);
        console.log("Your score: " + score + " Computer Score: "+ compScore);

        var playerChoice = prompt("Enter an option (Rock/Paper/Scissors) ");
        playerChoice = playerChoice.trim().toLowerCase();

        var computerChoice = options[Math.floor(Math.random()*3 + 1) -1];
        console.log("Player chose " + playerChoice + ", Computer chose " + computerChoice);

        switch (playerChoice) {
            case "rock":
                if (computerChoice == "scissors") {
                    score++;
                    alert("Player wins!");
                    break;
                } else if (computerChoice == "paper") {
                    compScore++;
                    alert("Computer wins!");
                    break;
                } else if (playerChoice == computerChoice) {
                    alert("It was a tie!");
                    break;
                }
            
            case "paper":
                if (computerChoice == "rock") {
                    score++;
                    alert("Player wins!");
                    break;
                } else if (computerChoice == "scissors") {
                    compScore++;
                    alert("Computer wins!");
                    break;
                } else if (playerChoice == computerChoice) {
                    alert("It was a tie!");
                    break;
                }

            case "scissors":
                if (computerChoice == "paper") {
                    score++;
                    alert("Player wins!");
                    break;
                } else if (computerChoice == "rock") {
                    compScore++;
                    alert("Computer wins!");
                    break;
                } else if (playerChoice == computerChoice) {
                    alert("It was a tie!");
                    break;
                }
            
        }

    }

    if (compScore > score) {
        alert("Your final score was "+score+", and Computer had" +compScore + "Computer wins!");

    } else { alert("Your final score was "+score+", and Computer had " +compScore + ". You win!")}
}; 

startGame();