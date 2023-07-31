'use strict';

//selecting elements
const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//rolling dice functionality
btnRoll.addEventListener('click', () => {
  //generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //check for rolled 1: if true
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //switch to next player
  }
});
