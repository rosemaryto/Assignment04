let choice = prompt ("Rock, Paper, Scissors?");

let randomNum = Math.floor(Math.random() * 10 + 1);
let compChoice = randomNum;
if (randomNum >= 0 && randomNum <= 3) {
    compChoice = "Rock";
} else if (randomNum >= 4 && randomNum <= 7) {
    compChoice = "Paper";
} else if (randomNum >= 8 && randomNum <= 10) {
    compChoice = "Scissors";
} 

if (choice === "rock") {
    if (compChoice === "Rock") {
        alert("rock and rock is a tie!");
    } else if (compChoice === "Paper") {
        alert("paper covers rock. You lose!");
    } else if (compChoice =="Scissors") {
        alert("rock destroys scissors. You win!");
    }
} else if (choice === "paper") {
    if (compChoice === "Rock") {
        alert("paper covers rock. You win!");
    } else if (compChoice === "Paper") {
        alert("paper and paper is a tie.");
    } else if (compChoice =="Scissors") {
        alert("scissors cut paper. You lose!");
    }
} else if (choice === "scissors") {
    if (compChoice === "Rock") {
        alert("rock destroys scissors. You lose!");
    } else if (compChoice === "Paper") {
        alert("scissors cut paper. You win!");
    } else if (compChoice =="Scissors") {
        alert("scissors and scissors is a tie.");
    }
} else {
    alert("you must select: paper, scisors, or rock!")
}


