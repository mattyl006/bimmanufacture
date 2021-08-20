const scanningSection = document.querySelector('.scanning__grid--js');

const navObserverOptions = {
    rootMargin: '0px',
};

const counterNum = document.querySelectorAll('.scanning__number--js');

const areaSpeed = 400;
const areaUpdate = 10;

const businessSpeed = 600;
const businessUpdate = 100;

const countrySpeed = 1100;
const countryUpdate = 1000;

const navObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout(() => {
                counterNum.forEach(c => {
                    let speed = 1;
                    let update = 1;
                    if(c.getAttribute('data-target') === "250000") {
                        speed = areaSpeed;
                        update = areaUpdate;
                    }
                    else if(c.getAttribute('data-target') === "32") {
                        speed = businessSpeed;
                        update = businessUpdate;
                    }
                    else {
                        speed = countrySpeed;
                        update = countryUpdate;
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
}, navObserverOptions);

navObserver.observe(scanningSection);
