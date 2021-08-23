const scanningSectionProject1 = document.querySelector('.pop-up__counter--js');

const counterNum = document.querySelectorAll('.pop-up__counter-number--js');

const scanningObserverOptions = {
    rootMargin: '0px',
};

const areaSpeedProject1 = 500;
const areaUpdateProject1 = 10;

const stationsSpeedProject1= 600;
const stationsUpdateProject1 = 15;

const investmentSpeedProject1 = 660;
const investmentUpdateProject1 = 15;

const scanningProject1Observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                counterNum.forEach(c => {
                    let speed = 1;
                    let update = 1;
                    if(c.getAttribute('data-target') === "180000") {
                        speed = areaSpeedProject1;
                        update = areaUpdateProject1;
                    }
                    else if(c.getAttribute('data-target') === "9000") {
                        speed = stationsSpeedProject1;
                        update = stationsUpdateProject1;
                    }
                    else {
                        speed = investmentSpeedProject1;
                        update = investmentUpdateProject1;
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

scanningProject1Observer.observe(scanningSectionProject1);