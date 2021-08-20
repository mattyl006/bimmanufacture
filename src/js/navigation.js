const hamburger = document.querySelector('.navigation__hamburger--js');
const menu = document.querySelector('.navigation__list--js');

const plButton = document.querySelector('.navigation__polish--js');
const engButton = document.querySelector('.navigation__english--js');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('navigation__hamburger--active');
    menu.classList.add('menu--animation');
    menu.classList.toggle('visible');
});

plButton.addEventListener('click', () => {
    console.log('clicked');
});

engButton.addEventListener('click', () => {
    console.log('clicked');
});