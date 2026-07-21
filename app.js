// Scores
let userScore = 0;
let compScore = 0;

// HTML Elements
const choices = document.querySelectorAll(".choice");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const msg = document.getElementById("msg");

// Computer Choice
function getCompChoice() {

    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

// Play Game
function playGame(userChoice) {

    let compChoice = getCompChoice();

    console.log("User Choice :", userChoice);
    console.log("Computer Choice :", compChoice);

    // Draw
    if (userChoice === compChoice) {

        msg.innerText = "Match Draw";
        msg.style.backgroundColor = "#081b31";
        return;
    }

    // User chooses Rock
    if (userChoice === "rock") {

        if (compChoice === "paper") {

            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = "Computer Wins! Paper beats Rock";
            msg.style.backgroundColor = "red";

        } else {

            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = "You Win! Rock beats Scissors";
            msg.style.backgroundColor = "green";
        }
    }

    // User chooses Paper
    else if (userChoice === "paper") {

        if (compChoice === "scissors") {

            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = "Computer Wins! Scissors beats Paper";
            msg.style.backgroundColor = "red";

        } else {

            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = "You Win! Paper beats Rock";
            msg.style.backgroundColor = "green";
        }
    }

    // User chooses Scissors
    else if (userChoice === "scissors") {

        if (compChoice === "rock") {

            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = "Computer Wins! Rock beats Scissors";
            msg.style.backgroundColor = "red";

        } else {

            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = "You Win! Scissors beats Paper";
            msg.style.backgroundColor = "green";
        }
    }
}

// Click Events
choices.forEach(function(choice) {

    choice.addEventListener("click", function() {

        let userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});


