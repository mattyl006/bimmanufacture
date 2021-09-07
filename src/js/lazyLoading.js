const offertSection = document.querySelector('.offert--js');
const scanningSection = document.querySelector('.scanning--js');
const modelingSection = document.querySelector('.modeling--js');
const consultingSection = document.querySelector('.consulting--js');
const realizationsSection = document.querySelector('.realizations--js');
const referencesSection = document.querySelector('.references--js');
const contactSection = document.querySelector('.contact--js');
const footer = document.querySelector('.footer');

const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
if(!(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))) {
    offertSection.classList.remove('offertVisible');
    scanningSection.classList.remove('scanningVisible');
    modelingSection.classList.remove('modelingVisible');
    consultingSection.classList.remove('consultingVisible');
    realizationsSection.classList.remove('realizationsVisible');
    referencesSection.classList.remove('referencesVisible');
    contactSection.classList.remove('contactVisible');
    footer.classList.remove('footerVisible');
} else {
    alert("Website not work correctly in this browser, please change browser.")
}

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
        } else {
            offertSection.classList.remove('offertVisible');
        }
    })
}, lazyLoadingOptions);

const scanningObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            scanningSection.classList.add('scanningVisible');
        } else {
            scanningSection.classList.remove('scanningVisible');
        }
    })
}, lazyLoadingOptions);

const modelingObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            modelingSection.classList.add('modelingVisible');
        } else {
            modelingSection.classList.remove('modelingVisible');
        }
    })
}, lazyLoadingOptions);

const consultingObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            consultingSection.classList.add('consultingVisible');
        } else {
            consultingSection.classList.remove('consultingVisible');
        }
    })
}, lazyLoadingOptions);

const realizationsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            realizationsSection.classList.add('realizationsVisible');
        } else  {
            realizationsSection.classList.remove('realizationsVisible');
        }
    })
}, lazyLoadingOptions);

const referencesObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            referencesSection.classList.add('referencesVisible');
        } else {
            referencesSection.classList.remove('referencesVisible');
        }
    })
}, lazyLoadingOptions);

const contactObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            contactSection.classList.add('contactVisible');
        } else {
            contactSection.classList.remove('contactVisible');
        }
    })
}, lazyLoadingOptionsWithoutMargin);

const footerObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            footer.classList.add('footerVisible');
        } else {
            footer.classList.remove('footerVisible');
        }
    })
}, lazyLoadingOptionsWithoutMargin);

if(msie < 0) {
    offertObserver.observe(offertSection);
    scanningObserver.observe(scanningSection);
    modelingObserver.observe(modelingSection);
    consultingObserver.observe(consultingSection);
    realizationsObserver.observe(realizationsSection);
    referencesObserver.observe(referencesSection);
    contactObserver.observe(contactSection);
    footerObserver.observe(footer);
}
