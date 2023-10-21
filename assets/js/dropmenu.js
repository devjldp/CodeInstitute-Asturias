let btnBurguer = document.getElementById("btn-hamburguer");
let navigation = document.getElementById("navigation");

btnBurguer.addEventListener('click', () => {
  navigation.classList.toggle('active');
});