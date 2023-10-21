const cards = document.querySelectorAll('.card');

window.addEventListener('DOMContentLoaded', () => {
  // Iterate through each 'card' and toggle the class on the "clicked" card.
  for (let i in cards) {
    cards[i].addEventListener('click', () => {
      cards[i].classList.toggle('is-flipped')
    })
  }
})