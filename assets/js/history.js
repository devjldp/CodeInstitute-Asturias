const cards = document.querySelectorAll('.card');

window.addEventListener('DOMContentLoaded', () => {
  // Iterate through each 'card' and toggle the class on the "clicked" card.
  for (let card of cards) {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped')
    })
  }
})