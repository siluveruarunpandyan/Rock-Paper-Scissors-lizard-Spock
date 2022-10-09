`use strict`;


//elements
const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');
const resultEl = document.getElementById(`result`);
const userChoiceEl = document.getElementById(`user-choice`);
const compChoiceEl = document.getElementById(`comp-choice`);

// console.log(userScoreEl);
// console.log(compScoreEl);
// console.log(resultEl);
// console.log(userChoiceEl);
// console.log(compChoiceEl);

//global variables
// let userChoice = '';
// let compChoice = '';

//function
const getCompChoice = function(){
    const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.trunc(Math.random()*5);
    const randomChoice = weapons[randomNumber];
    return randomChoice;
    
}
const getResult = function(userChoice, compChoice){
    if(userChoice === 'rock'){
        if(compChoice === 'rock'){
            return 'Draw';
        }else if(compChoice === 'paper'){
            return 'lost';
        }else if(compChoice === 'scissors'){
            return 'won';
        }else if(compChoice === 'lizard'){
            return
        }
    }
}


const playGame = function(weapons){
    const userChoice = weapons;
    const compChoice = getCompChoice();
  
}








