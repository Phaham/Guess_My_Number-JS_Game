'use strict';

/* TODO: Understanding basic DOM manipulation ->

//TO select objects to apply properties on them->
// document.querySelector('.message');
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);//empty 
document.querySelector('.guess').value=23; // prints 23 in input box
*/

/*TODO: Clicking Of a button -->
        ->we use event listener for it
        -> Event listeners also used for clicking using mouse, pressing any key or movent of mouse to happen certain event
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;//trumc used to range b/w 0 and 19 by adding 1 it will range b/w 1 and 20
let score = 20;
let highScore = 0;

// refractoring message -> we don't have to write  document.querySelector('.message').textContent again and again

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof (guess));

    // When No Input
    if (!guess) {
        // document.querySelector('.message').textContent = '🍚 No Number';
        displayMessage('🍚 No Number');
    }
    // When Player Wins
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //When Guess is Wrong -->
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '🥵 You lost the Game!';
            displayMessage('🥵 You lost the Game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})
    /*
    // When Guess is high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.message').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '🥵 You lost the Game!';
            document.querySelector('.message').textContent = 0;
        }
    }
    // When Guess is low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.message').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '🥵 You lost the Game!';
            document.querySelector('.message').textContent = 0;
        }
    }
})// we use only check instead of btn because btn is also used for other buttons (here 'Again' is also uses btn)
*/
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;//trumc used to range b/w 0 and 19 by adding 1 it will range b/w 1 and 20
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';



})