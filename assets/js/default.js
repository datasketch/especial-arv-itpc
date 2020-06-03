const menuToggle = document.querySelector('.menu-toggle')
const menu = document.getElementById('menu')

menuToggle.addEventListener('click', function() {
  this.classList.toggle('active')
  const isOpened = menu.hasAttribute('data-open')
  menu.classList.toggle('hidden', isOpened)
  !isOpened ? menu.setAttribute('data-open', '') : menu.removeAttribute('data-open')
})