const displayCompChoice = document.getElementById("compChoice");
const displayUserChoice = document.getElementById("yourChoice");
const displayResult = document.getElementById("result");
const userPoints = document.getElementById("userPoints");
const compPoints = document.getElementById("compPoints");

const options = document.querySelectorAll("button");
let userChoice;
let compChoice;
let result;
let userP = 0;
let compP = 0;
let userWin;
let compWin;
options.forEach(selectOption => selectOption.addEventListener('click',(element)=>{
    userChoice = element.target.id;
    displayUserChoice.innerHTML = userChoice;
    getCompChoice();
    getResult();
    displayPoints();

}))

function getCompChoice(){
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0: compChoice = "rock";
        break;

        case 1: compChoice = "paper";
        break;

        case 2: compChoice = "scissors";
        break;

    }
    displayCompChoice.innerHTML = compChoice;
}

function getResult(){
    if(compChoice === userChoice){
    result = "Its a Draw";
    compWin = false;
    userWin = false;
    }

    else if(compChoice === "rock" && userChoice === "paper"){
        result = "You Win!!! 🏆";
        compWin = false;
        userWin = true;
    }
    

    else if(compChoice === "rock" && userChoice === "scissors"){
        result = "Computer Wins!!! 🏆";
        compWin = true;
        userWin = false;
    }

    else if(compChoice === "paper" && userChoice === "rock"){
        result = "Computer Wins!!! 🏆";
        compWin = true;
        userWin = false;
    }

    else if(compChoice === "paper" && userChoice === "scissors"){
        result = "You Win!!! 🏆";
        compWin = false;
        userWin = true;
    }

    else if(compChoice === "scissors" && userChoice === "rock"){
        result = "You Win!!! 🏆";
        compWin = false;
        userWin = true;
    }

    else{
        result = "Computer Wins!!! 🏆";
        compWin = true;
        userWin = false;
    }

    displayResult.innerHTML = result;
}

function displayPoints(){
    if(compWin)
    compP += 1;
    if(userWin)
    userP += 1;
    
    userPoints.innerHTML = userP;
    compPoints.innerHTML = compP;
}


