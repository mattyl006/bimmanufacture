const hamburger = document.querySelector('.navigation__hamburger--js');
const menu = document.querySelector('.navigation__list--js');

const plButton = document.querySelector('.navigation__polish--js');
const engButton = document.querySelector('.navigation__english--js');

const main = document.getElementById('main--js');

main.addEventListener('click', () => {
    if(menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        hamburger.classList.remove('navigation__hamburger--active');
    }
})

hamburger.addEventListener('click', () => {
    menu.classList.add('menu--animation');
    if(menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        hamburger.classList.remove('navigation__hamburger--active');
    } else {
        menu.classList.add('visible');
        hamburger.classList.add('navigation__hamburger--active');
    }
});

plButton.addEventListener('click', () => {
    console.log('clicked');
});

engButton.addEventListener('click', () => {
    console.log('clicked');
});