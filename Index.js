"use strict";
let checkBtn = document.getElementById("check");
let number = document.getElementById("number");
let guess = document.getElementById("guess");
let message = document.getElementById("message");
let score = document.getElementById("score");
let highscore = document.getElementById("highscore");
let again = document.getElementById("again");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let scores = 20;

let checkNumber = () => {
    const guessNumber = Number(guess.value);
    // console.log(guessNumber);
    if (!guessNumber) {
        message.textContent = "No number";
    } else if (guessNumber === randomNumber) {
        message.textContent = "Correct number";
        highscore.textContent = scores;
        number.textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = 'green';

        if (scores > highscore) {
            highscore.textContent = scores;
        }
    } else if (guessNumber > randomNumber) {
        if (scores > 0) {
            message.textContent = 'Too high !';
            scores--;
            // console.log('k' + scores);
            score.textContent = scores;
        } else {
            message.textContent = 'You lost the game!';
        }
    } else if (guessNumber < randomNumber) {
        if (scores > 0) {
            message.textContent = 'Too low !';
            scores--;
            // console.log('k' + scores);
            score.textContent = scores;
        } else {
            message.textContent = 'You lost the game!';
        }

    }
};

checkBtn.addEventListener("click", checkNumber);
const reset = () => {
    document.querySelector('body').style.backgroundColor = '#722F37';

    // number.style.width = '15rem';
    scores = 20;
    score.textContent = scores;
    message.textContent = 'Start guessing...';
    number.textContent = '?';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    guess.value = "";
    // console.log('ra', randomNumber);
}

again.addEventListener("click", reset);