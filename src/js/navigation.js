console.log('hello navigation');

const navButton = document.querySelector('.navigation__menu--js');
const navList = document.querySelector('.navigation__list--js');

const plButton = document.querySelector('.navigation__polish--js');
const engButton = document.querySelector('.navigation__english--js');

console.log(navList);
console.log(navButton);

navButton.addEventListener('click', () => {
    navList.classList.toggle('visible');
});

plButton.addEventListener('click', () => {
    console.log('clicked');
});

engButton.addEventListener('click', () => {
    console.log('clicked');
});