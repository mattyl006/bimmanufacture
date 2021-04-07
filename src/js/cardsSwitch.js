const leftSwitch = document.querySelector('.realizations__switch-left--js');
const rightSwitch = document.querySelector('.realizations__switch-right--js');
const cards = document.querySelector('.realizations__cards--js');

leftSwitch.addEventListener('click', () => {
    if(cards.classList.contains('transformLeft')) {
        cards.classList.remove('transformLeft');
        rightSwitch.classList.remove('iconRightTransparent');
    } else {
        cards.classList.add('transformRight');
        leftSwitch.classList.add('iconLeftTransparent');
    }
})

rightSwitch.addEventListener('click', () => {
    if(cards.classList.contains('transformRight')) {
        cards.classList.remove('transformRight');
        leftSwitch.classList.remove('iconLeftTransparent');
    } else {
        cards.classList.add('transformLeft');
        rightSwitch.classList.add('iconRightTransparent');
    }
})