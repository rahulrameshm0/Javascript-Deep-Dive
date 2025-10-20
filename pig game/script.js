'use strict'


// Storing Element
const score1 = document.querySelector('#score-1');
const score2 = document.getElementById('#score-2');
const dice_roll = document.querySelector('.dice');
const new_btn = document.querySelector('.new-btn');
const roll = document.querySelector('.roll-dice');
const hold = document.querySelector('.hold');

// Starting Comdition
score1.textContent = 0;
score2.textContent = 0;
dice_roll.classList.add('hidden');

// Rolling Dice functionality
roll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) + 1;
    dice_roll.classList.remove('hidden');
    dice_roll.src = `dice-${dice}.png`;
});