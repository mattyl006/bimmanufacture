const scanningSectionProject2 = document.querySelector('.pop-up__counter2--js');

const counterNum = document.querySelectorAll('.pop-up__counter-number2--js');

const scanningObserverOptions = {
    rootMargin: '0px',
};

const areaSpeedProject2 = 400;
const areaUpdateProject2 = 10;

const scansSpeedProject2= 300;
const scansUpdateProject2 = 15;

const scanningProject2Observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                counterNum.forEach(c => {
                    let speed = 1;
                    let update = 1;
                    if(c.getAttribute('data-target') === "41500") {
                        speed = areaSpeedProject2;
                        update = areaUpdateProject2;
                    }
                    else {
                        speed = scansSpeedProject2;
                        update = scansUpdateProject2;
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

scanningProject2Observer.observe(scanningSectionProject2);