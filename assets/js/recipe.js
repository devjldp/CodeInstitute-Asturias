/* jshint esversion:8 */

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
const rTitle = document.getElementById('recipe-title');
const btnR = document.getElementById("btn-hamburguer");

/**
 * This function toggle the visibility of three HTML elements by toggling the 'hide' class.
 * @param {HTMLElement} element1 - The first element to show or hide.
 * @param {HTMLElement} element2 - The second element to show or hide.
 * @param {HTMLElement} element3 - The third element to show or hide.
 */
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

  for (let button of buttonsClose) {
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

  btnR.addEventListener('click', () => {
    rTitle.classList.toggle('mt-12vw');
  });
})