let userScore = 0;
let compScore = 0;

let uPoints = document.querySelector("#uscore");
let cPoints = document.querySelector("#cscore");

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const uChoice = choice.getAttribute("id");
        console.log("Choice was clicked", uChoice);
        playGame(uChoice);
    });
});

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const ran = Math.floor(Math.random() * 3);
    return options[ran];
}

const playGame = (uChoice) => {
    console.log("User Choose", uChoice);
    // generate computer choice.
    const cChoice = genCompChoice();
    console.log("Computer choice", cChoice);
    checkWin(uChoice, cChoice);
}

const showWinner = (uWin, uChoice, cChoice) =>{
    if(uWin){
        console.log("User Won");
        msg.innerText = "You Won " + uChoice + " Beats " + cChoice;   
       // msg.style.backgroundColor = "green";
        userScore ++;
        uPoints.innerText = userScore;

    } else {
        console.log("Computer Won");
        msg.innerText = "Computer Won " + cChoice + " Beats " + uChoice;
        //msg.style.backgroundColor = "Red";
        compScore ++;
        cPoints.innerText = compScore;
    }
};

const checkWin = (uChoice, cChoice ) =>{
    if(uChoice === cChoice){
        msg.innerText = "It's a tie";
       // msg.style.backgroundColor = "#081b31";
    } else {
        let uWin = true;
        if(uChoice === "rock"){
            uWin = cChoice === "paper" ? false : true;
        } else if (uChoice === "paper") {
            uWin = cChoice === "scissors" ? false : true;
        } else {
            uWin = cChoice === "rock" ? false : true;
        }
        showWinner(uWin, uChoice, cChoice);
    }
    
};