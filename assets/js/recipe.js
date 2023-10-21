const buttons = document.querySelectorAll('.recipe-button');
const fabada = document.getElementById('fabada');
const frixuelos = document.getElementById('frixuelos');
const hake = document.getElementById('hake');
const buttonsClose = document.querySelectorAll('.btn-close');
const downArrowF = document.getElementById('down-arrow-f');
const upArrowF = document.getElementById('up-arrow-f');
const downArrowH = document.getElementById('down-arrow-h');
const upArrowH = document.getElementById('up-arrow-h');
const downArrowFr = document.getElementById('down-arrow-fr');
const upArrowFr = document.getElementById('up-arrow-fr');

const showRecipe = (element1, element2, element3) => {
  element1.classList.toggle('hide');
  element2.classList.toggle('hide');
  element3.classList.toggle('hide');
}
window.addEventListener("DOMContentLoaded", () => {
  for (let button of buttons) {
    button.addEventListener('click', () => {
      if (button.value == 'fabada') {
        showRecipe(fabada, upArrowF, downArrowF);
      } else if (button.value == 'hake') {
        showRecipe(hake, upArrowH, downArrowH);
      } else if (button.value == 'frixuelos') {
        showRecipe(frixuelos, upArrowFr, downArrowFr);
      }
    })
  }
})