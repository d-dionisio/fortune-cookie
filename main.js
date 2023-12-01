// variaveis
const cookie = document.querySelector('.cookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnOpen = document.querySelector('#btnOpen')

//eventos
cookie.addEventListener('click', clickCookie)
btnOpen.addEventListener('click', openCookie)

//funções
function clickCookie() {
  toggleHandle()
}

function openCookie() {
  toggleHandle()
}

function toggleHandle() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}