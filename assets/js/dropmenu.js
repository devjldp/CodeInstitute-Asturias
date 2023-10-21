let btnBurguer = document.getElementById("btn-hamburguer");
let navigation = document.getElementById("navigation");

btnBurguer.addEventListener('click', () => {
  let display = window.getComputedStyle(navigation)
  console.log(display.getPropertyValue('display'))

  if (display.getPropertyValue('display') == 'none') {
    navigation.classList.add('show')
    navigation.classList.remove('nav-links')
  } else {
    navigation.classList.remove('show')
    navigation.classList.add('nav-links')
  }
});