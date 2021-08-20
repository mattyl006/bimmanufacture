const leftSwitch = document.querySelector('.realizations__switch-left--js');
const rightSwitch = document.querySelector('.realizations__switch-right--js');
const cards = document.querySelector('.realizations__cards--js');

leftSwitch.addEventListener('click', () => {
    if(cards.classList.contains('switchRight')) {
        cards.classList.remove('switchRight');
        rightSwitch.classList.remove('iconRightTransparent');
    } else {
        cards.classList.add('switchLeft');
        leftSwitch.classList.add('iconLeftTransparent');
    }
})

rightSwitch.addEventListener('click', () => {
    if(cards.classList.contains('switchLeft')) {
        cards.classList.remove('switchLeft');
        leftSwitch.classList.remove('iconLeftTransparent');
    } else {
        cards.classList.add('switchRight');
        rightSwitch.classList.add('iconRightTransparent');
    }
})

const leftSwitchRef = document.querySelector('.references__switch-left--js');
const rightSwitchRef = document.querySelector('.references__switch-right--js');
const cardsRef = document.querySelector('.references__cards--js');

leftSwitchRef.addEventListener('click', () => {
    if(cardsRef.classList.contains('switchRight2')) {
        cardsRef.classList.remove('switchRight2');
        rightSwitchRef.classList.remove('iconRightTransparent');
    } else if(cardsRef.classList.contains('switchRight')) {
        cardsRef.classList.remove('switchRight');
    } else if(cardsRef.classList.contains('switchLeft')) {
        cardsRef.classList.add('switchLeft2');
        console.log("powinno się dodać");
        leftSwitchRef.classList.add('iconLeftTransparent');
    } else {
        cardsRef.classList.add('switchLeft');
    }
})

rightSwitchRef.addEventListener('click', () => {
    if(cardsRef.classList.contains('switchLeft2')) {
        cardsRef.classList.remove('switchLeft2');
        leftSwitchRef.classList.remove('iconLeftTransparent');
    } else if(cardsRef.classList.contains('switchLeft')) {
        cardsRef.classList.remove('switchLeft');
    } else if(cardsRef.classList.contains('switchRight')) {
        cardsRef.classList.add('switchRight2');
        rightSwitchRef.classList.add('iconRightTransparent');
    } else {
        cardsRef.classList.add('switchRight');
    }
})