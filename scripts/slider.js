// info slider
let infoPrevBtn = document.querySelector('.info__btn-prev');
let infoNextBtn = document.querySelector('.info__btn-next');
let infoSlides = document.querySelectorAll('.info__slide');
let infoDots = document.querySelectorAll('.info__dot');
let infoIndex = 0;

// settings slider
let setSlides = document.querySelectorAll('.settings__slide');
console.log(infoSlides);
let setDots = document.querySelectorAll('.settings__dot');
console.log(infoDots);
let setIndex = 0;

function activeSlide () {
    for (infoSlide of infoSlides) {
        infoSlide.classList.remove('active');
    }
    infoSlides[infoIndex].classList.add('active');
    for (setSlide of setSlides) {
        setSlide.classList.remove('active');
    }
    setSlides[setIndex].classList.add('active');
}

function activeDot () {
    for (infoDot of infoDots) {
        infoDot.classList.remove('active');
    }
    infoDots[infoIndex].classList.add('active');

    for (setDot of setDots) {
        setDot.classList.remove('active');
    }
    setDots[setIndex].classList.add('active');
}

function prepareCurrentSlide (ind) {
    activeSlide(infoIndex);
    activeDot(infoIndex);

    activeSlide(setIndex);
    activeDot(setIndex);
}
function nextSlide () {
    if (infoIndex == infoSlides.length -1) {
        infoIndex = 0;
        prepareCurrentSlide(infoIndex);
    } else {
        infoIndex++;
        prepareCurrentSlide(infoIndex);
    }
}

function setNextSlide () {
    if (setIndex == setSlides.length -1) {
        setIndex = 0;
        prepareCurrentSlide(setIndex);
    } else {
        setIndex++;
        prepareCurrentSlide(setIndex);
    }
}

function prevSlide () {
    if (infoIndex == 0) {
        infoIndex = infoSlides.length - 1;
        prepareCurrentSlide(infoIndex);
    } else {
    infoIndex--;
    prepareCurrentSlide(infoIndex);
    }
}


infoPrevBtn.addEventListener('click', prevSlide);
infoNextBtn.addEventListener('click', nextSlide);

infoDots.forEach(function(item, indexDot) {
    item.addEventListener('click', () => {
        infoIndex = indexDot;
        prepareCurrentSlide(infoIndex);
    })
});

setDots.forEach(function(item, indexDot) {
    item.addEventListener('click', () => {
        setIndex = indexDot;
        prepareCurrentSlide(setIndex);
    })
});

let infoAutoChange = setInterval(nextSlide, 3000);
let setAutoChange = setInterval(setNextSlide, 3000);

for (infoSlide of infoSlides) {
    infoSlide.addEventListener ('mouseover', () => {
        clearInterval(infoAutoChange);
    })
}

for (setSlide of setSlides) {
    setSlide.addEventListener ('mouseover', () => {
        clearInterval(setAutoChange);
    })
}

