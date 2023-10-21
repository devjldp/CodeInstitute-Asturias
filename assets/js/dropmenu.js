let btnBurguer = document.getElementById("btn-hamburguer");
let navigation = document.getElementById("navigation");
let title = document.getElementById("history-title");


btnBurguer.addEventListener('click', () => {
  navigation.classList.toggle('active');
  title.classList.toggle('mt-12vw')
});