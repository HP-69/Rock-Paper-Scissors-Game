let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game DRAW Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin === true){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerscore++;
        compScorePara.innerText = computerscore;
        msg.innerText = `You Lose! ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compchoice = genCompChoice();
    console.log("comp choice = ", compchoice)

    if(userChoice === compchoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
           userWin = compchoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compchoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissor"){
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playgame(userChoice);
    });
});