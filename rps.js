const personText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const btns = document.querySelectorAll(".btn");

let person;
let computer;
let result

btns.forEach(button => button.addEventListener("click", () => {
    person = button.textContent;
    compTurn();
    personText.textContent = `Person: ${person}`;
    computerText.textContent = `Ghost: ${computer}`;
    resultText.textContent = gameItself();
})
);

function compTurn() {
   const rando = Math.floor(Math.random()*3)+1;

   switch(rando) {
    case 1:
        computer = "Rock";
        break;
    case 2:
        computer = "Paper";
        break;
    case 3:
        computer = "Scissors";
        break;    
   }
}

function gameItself() {
    if(computer == person) {
        return "It's a DRAW!"
    } else if(computer == "Rock"){ 
        return(person === "Paper") ? "You WIN!" : "You LOSE!";
    } else if(computer == "Paper"){ 
        return(person === "Scissors") ? "You WIN!" : "You LOSE!";
    } else if(computer == "Scissors"){ 
        return(person === "Rock") ? "You WIN!" : "You LOSE!";
    }
}



