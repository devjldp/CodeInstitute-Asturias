/* jshint esversion:8 */

const cards = document.querySelectorAll('.card');
const btnH = document.getElementById("btn-hamburguer");
let hTitle = document.getElementById("history-title");

window.addEventListener('DOMContentLoaded', () => {
  // Iterate through each 'card' and toggle the class on the "clicked" card.
  for (let card of cards) {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  }

  btnH.addEventListener('click', () => {
    hTitle.classList.toggle('mt-12vw');
  });
});