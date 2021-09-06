const scanningSectionProject3 = document.querySelector('.pop-up__counter3--js');

const counterNum = document.querySelectorAll('.pop-up__counter-number3--js');

const scanningObserverOptions = {
    rootMargin: '0px',
};

const typesSpeedProject3 = 400;
const typesUpdateProject3 = 10;

const timeSpeedProject3 = 1100;
const timeUpdateProject3 = 1000;

const scanningProject3Observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                counterNum.forEach(c => {
                    let speed = 1;
                    let update = 1;
                    if(c.getAttribute('data-target') === "630") {
                        speed = typesSpeedProject3;
                        update = typesUpdateProject3;
                    }
                    else {
                        speed = timeSpeedProject3;
                        update = timeUpdateProject3;
                    }

                    const updateCount = () => {
                        const target = +c.getAttribute('data-target');
                        const count = +c.innerText;

                        const inc = target / speed;

                        if(count < target) {
                            c.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, update);
                        } else {
                            c.innerText = target;
                        }
                    }

                    updateCount();
                })
            }, 1000);
        }
    })
}, scanningObserverOptions);

scanningProject3Observer.observe(scanningSectionProject3);