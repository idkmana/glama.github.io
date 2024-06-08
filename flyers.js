







const slider = document.querySelector('.slider');
const car = document.querySelector('.car')
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slide = setInterval(autofunc, 4500);

var sectionIndex = 0;
var direction = -1;
let timeout;
let slidee;


function autofunc() {
    slider.style.transform = 'translate(-25%)'
    car.style.justifyContent = 'flex-start'; 
    
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }
    direction = -1;
}

function click() {

    clearInterval(slide);
    clearInterval(slidee);
    slidee = setInterval(autofunc, 4500);
}


leftArrow.addEventListener('click', function left() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    }
    direction = 1;

    car.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(25%)';
    click();
});

rightArrow.addEventListener('click', function right() {
    direction = -1;
    car.style.justifyContent = 'flex-start'; 
    slider.style.transform = 'translate(-25%)';
    click();
});

slider.addEventListener('transitionend', function() {
    
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function() {
        slider.style.transition = 'all 0.7s';
    })
})
/*
sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected'); */