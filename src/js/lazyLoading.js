const offertSection = document.querySelector('.offert--js');
const scanningSection = document.querySelector('.scanning--js');
const modelingSection = document.querySelector('.modeling--js');
const consultingSection = document.querySelector('.consulting-js');
const contactSection = document.querySelector('.contact--js');
const footer = document.querySelector('.footer');

const lazyLoadingOptions = {
    rootMargin: '-32px',
};

const lazyLoadingObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {

        }
        else {

        }
    })
}, lazyLoadingOptions);

lazyLoadingObserver.observe(offertSection);