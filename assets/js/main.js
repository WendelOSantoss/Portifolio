const gadget = document.getElementById('celular');
const menu = document.getElementById('menu');


function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const body = document.getElementsByTagName('body');
  body[0].classList.toggle('travar');
  const html = document.getElementsByTagName('html');
  html[0].classList.toggle('travar');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

function fechar(event) {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
  const body = document.getElementsByTagName('body');
  body[0].classList.remove('travar');
  const html = document.getElementsByTagName('html');
  html[0].classList.remove('travar');
}

gadget.addEventListener('click', toggleMenu);
gadget.addEventListener('touchstart', toggleMenu);
menu.addEventListener('click', fechar);