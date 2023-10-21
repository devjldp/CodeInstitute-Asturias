let btnBurguer = document.getElementById("btn-hamburguer");
let navigation = document.getElementById("navigation");

window.addEventListener('DOMContentLoaded', () => {

  btnBurguer.addEventListener('click', () => {
    navigation.classList.toggle('active');
  });
})