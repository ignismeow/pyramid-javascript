let userScore = 0;
let compScore = 0;

const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore ++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore ++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game draw, Please try again!";
    msg.style.backgroundColor = "#080d5a";
};

const playGame = (userChoice) =>{
    // console.log("user choice =", userChoice);
    //Gernerate computer choice->
    const compChoice = genCompChoice();
    // console.log("Computer choice =", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissors" ? flase : true;
        } else {
            //rock, paper
            userWin = compChoice === " rock " ? flase: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});
