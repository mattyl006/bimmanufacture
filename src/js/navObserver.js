const navHeader = document.querySelector('.navigation--js');
const heroSection = document.querySelector('.hero--js');

const navList = document.querySelector('.navigation__list--js');
const navLinks = document.querySelectorAll('.navigation__link--js');
const navItems = document.querySelectorAll('.navigation__item--js');

const mainContainer = document.getElementById('main--js');

const navObserverOptions = {
    rootMargin: '-64px',
};

const navObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navHeader.classList.add('darkBackground');
            if (mainContainer.getBoundingClientRect().width <= 768) {
                navList.classList.add('darkerBackground');
                navLinks.forEach((elem) => {
                    elem.classList.add('lightText');
                })
                navItems.forEach((elem) => {
                    if(!elem.classList.contains('navigation__item--last'))
                        elem.classList.add('lightBorder');
                })
            }
        }
        else {
            navHeader.classList.remove('darkBackground');
            if (mainContainer.getBoundingClientRect().width <= 768) {
                navList.classList.remove('darkerBackground');
                navLinks.forEach((elem) => {
                    elem.classList.remove('lightText');
                })
                navItems.forEach((elem) => {
                    elem.classList.remove('lightBorder');
                })
            }
        }
    })
}, navObserverOptions);


navObserver.observe(heroSection);