const offertSection = document.querySelector('.offert--js');
const scanningSection = document.querySelector('.scanning--js');
const modelingSection = document.querySelector('.modeling--js');
const consultingSection = document.querySelector('.consulting--js');
const realizationsSection = document.querySelector('.realizations--js');
const referencesSection = document.querySelector('.references--js');
const contactSection = document.querySelector('.contact--js');
const footer = document.querySelector('.footer');


console.log("Siema siema");

const lazyLoadingOptions = {
    rootMargin: '-30%',
};

const lazyLoadingOptionsWithoutMargin = {
    rootMargin: '0px',
};

const offertObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            offertSection.classList.add('offertVisible');
        }
    })
}, lazyLoadingOptions);

const scanningObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            scanningSection.classList.add('scanningVisible');
        }
    })
}, lazyLoadingOptions);

const modelingObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            modelingSection.classList.add('modelingVisible');
        }
    })
}, lazyLoadingOptions);

const consultingObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            consultingSection.classList.add('consultingVisible');
        }
    })
}, lazyLoadingOptions);

const realizationsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            realizationsSection.classList.add('realizationsVisible');
        }
    })
}, lazyLoadingOptions);

const referencesObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            referencesSection.classList.add('referencesVisible');
        }
    })
}, lazyLoadingOptions);

const contactObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            contactSection.classList.add('contactVisible');
        }
    })
}, lazyLoadingOptionsWithoutMargin);

const footerObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            footer.classList.add('footerVisible');
        }
    })
}, lazyLoadingOptionsWithoutMargin);

offertObserver.observe(offertSection);
scanningObserver.observe(scanningSection);
modelingObserver.observe(modelingSection);
consultingObserver.observe(consultingSection);
realizationsObserver.observe(realizationsSection);
referencesObserver.observe(referencesSection);
contactObserver.observe(contactSection);
footerObserver.observe(footer);