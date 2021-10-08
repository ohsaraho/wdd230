const hambutton = document.querySelector('.ham');
const menunav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {menunav.classList.toggle('responsive')}, false);


// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 600) menunav.classList.remove('responsive')};
