const popUp1 = document.querySelector('.pop-up-1--js');
const popUp2 = document.querySelector('.pop-up-2--js');
const popUp3 = document.querySelector('.pop-up-3--js');

const buttonCardLeft = document.querySelector('.realizations__button-left--js');
const buttonCardCenter = document.querySelector('.realizations__button-center--js');
const buttonCardRight = document.querySelector('.realizations__button-right--js');

const buttonClose1 = document.querySelector('.pop-up__close-1--js');
const buttonClose2 = document.querySelector('.pop-up__close-2--js');
const buttonClose3 = document.querySelector('.pop-up__close-3--js');

buttonCardLeft.addEventListener('click', () => {
   popUp1.classList.add('visible-popUp');
});

buttonCardCenter.addEventListener('click', () => {
    popUp2.classList.add('visible-popUp');
});

buttonCardRight.addEventListener('click', () => {
    popUp3.classList.add('visible-popUp');
});

buttonClose1.addEventListener('click', () => {
    popUp1.classList.remove('visible-popUp');
});

buttonClose2.addEventListener('click', () => {
    popUp2.classList.remove('visible-popUp');
});

buttonClose3.addEventListener('click', () => {
    popUp3.classList.remove('visible-popUp');
});