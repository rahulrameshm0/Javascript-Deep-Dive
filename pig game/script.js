'use strict'


// Storing Element
const score1 = document.getElementById('score--1');
const score2 = document.getElementById('score--2');

const current_1 = document.getElementById('current--1');
const current_2 = document.getElementById('current--2');

const dice_roll = document.querySelector('.dice');

const new_btn = document.querySelector('.new-btn');
const roll = document.querySelector('.roll-btn');

const hold = document.querySelector('.hold');

const playerTitle1 = document.querySelector('.player-1-title');
const playerTitle2 = document.querySelector('.player-2-title');

let switchPlayer = function(){
    document.getElementById(`current--${activePlayer + 1}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        // document.querySelector(currentScore).textContent = currentScore;
    }

// currecnt score
const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Starting Comdition
score1.textContent = 0;
score2.textContent = 0;
dice_roll.classList.add('hidden');

// Rolling Dice functionality
roll.addEventListener('click', function(){
    if (playing){
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice)
        dice_roll.classList.remove('hidden');
        dice_roll.src = `dice-${dice}.png`;
        
        if (dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer + 1}`).textContent = currentScore;
            // current_1.textContent = currentScore
        }else{
            // switch to next player
            switchPlayer()
        }
    }
});

hold.addEventListener('click', function() {
    if (playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer + 1}`).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= 20){
            playing = false;
            const playerTitle = document.querySelector(`.player-${activePlayer + 1}-title`);
            playerTitle.classList.add('winner');
            playerTitle.textContent = `Player ${activePlayer + 1} Wins 🎉`; 
            // document.querySelector('.roll-btn').disabled = true;
            // document.querySelector('.hold-btn').disabled = true;
        }else{
            switchPlayer()
        }
    }
}); 


// new_btn.addEventListener('click', function(){
//     score1.textContent = 0;
//     score2.textContent = 0;
//     current_1.textContent = 0;
//     current_2.textContent = 0;

//     scores[0] = 0;
//     scores[1] = 0;
//     currentScore = 0;
//     activePlayer = 0;
//     playing = true;

//     // Reset player titles
//     playerTitle1.textContent = 'PLAYER 1';
//     playerTitle2.textContent = 'PLAYER 2';

//     // Remove winner class from both players
//     playerTitle1.classList.remove('winner');
//     playerTitle2.classList.remove('winner');

//     // Hide dice again
//     dice_roll.classList.add('hidden');
//     // playerTitle.classList.remove('winner');
// });


new_btn.addEventListener('click', function() {
    score1.textContent = 0;
    score2.textContent = 0;
    current_1.textContent = 0;
    current_2.textContent = 0;

    score1.textContent = 0;
    score2.textContent = 0;
    current_1.textContent = 0;
    current_2.textContent = 0;
    // score1.textContent = 0;

  dice_roll.classList.add('hidden');
});