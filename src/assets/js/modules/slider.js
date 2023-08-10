const slider = (sliderSelector, sliderElementSelector, dotsSelector) => {
    const slider = document.querySelector(sliderSelector);
    const sliderElements = document.querySelectorAll(sliderElementSelector);
    const dotsContainer = document.querySelector(dotsSelector);
    const sliderElementWidth = sliderElements[0].clientWidth;

    let slideIndex = -1;

    const createDot = () => {
        const dot = document.createElement('button');
        dotsContainer.appendChild(dot);
        return dot;
    };

    const updateDots = () => {
        const dots = Array.from(dotsContainer.children);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    };

    const slide = () => {
        slideIndex = (slideIndex + 1) % sliderElements.length;
        const translateX = -slideIndex * sliderElementWidth;
        slider.style.transform = `translateX(${translateX}px)`;
        updateDots();
    };

    sliderElements.forEach(() => createDot());

    dotsContainer.addEventListener('click', (event) => {
        const dot = event.target.closest('button');
        if (dot) {
            slideIndex = Array.from(dotsContainer.children).indexOf(dot) - 1;
            slide();
        }
    });

    slide();
    setInterval(slide, 5000);
};

export default slider;
