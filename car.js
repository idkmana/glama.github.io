const slider = document.querySelector('.slider');
const car = document.querySelector('.car')
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');



const slide = setInterval(autofunc, 4500);

var sectionIndex = 0;
var direction = -1;
var clicks = 0;

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
    let drop = document.querySelectorAll('.btn');
    drop.forEach((div) => {
        div.classList.remove('active')
 })
});

rightArrow.addEventListener('click', function right() {
    direction = -1;
    car.style.justifyContent = 'flex-start'; 
    slider.style.transform = 'translate(-25%)';
    click();
    let drop = document.querySelectorAll('.btn');
    drop.forEach((div) => {
        div.classList.remove('active')
 })
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
});
   

    let dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(el => {
        el.addEventListener("click", drop_d);
    });

    function drop_d(){
        clicks = (clicks < 1) ? clicks + 1 : 0;
        this.classList.toggle('active');
        rightArrow.addEventListener('click', function() {
            clicks = 0;
        });
        leftArrow.addEventListener('click', function() {
            clicks = 0;
        });
        if(clicks === 1){
            clearInterval(slide);
        clearInterval(slidee);
        }
        else{
            clearInterval(slide);
        clearInterval(slidee);
        slidee = setInterval(autofunc, 4500);}

        let drop = document.querySelectorAll('.btn');
        drop.forEach((div) => {
        div.classList.toggle('active');
        })

        

        }

/*

const drop = document.querySelector('.btn');
const drop2 = document.querySelector('.btn.a');
const drop3 = document.querySelector('.btn.b');
const drop4 = document.querySelector('.btn.c');
document.querySelector('.dropdown').onclick = function(){
     clicks = (clicks < 1) ? clicks + 1 : 0;
    
    if(clicks === 1){
        clearInterval(slide);
    clearInterval(slidee);
    this.classList.add('active');
    drop.classList.add('active');
    }
    if(clicks === 0){
        clearInterval(slide);
    clearInterval(slidee);
    slidee = setInterval(autofunc, 4500);
    this.classList.remove('active');
    drop.classList.remove('active');
    }
}
document.querySelector('.dropdown.a').onclick = function(){
    clicks = (clicks < 1) ? clicks + 1 : 0;

    if(clicks === 1){
        clearInterval(slide);
    clearInterval(slidee);
    this.classList.add('active');
    drop2.classList.add('active');
    }
    if(clicks === 0){
        clearInterval(slide);
    clearInterval(slidee);
    slidee = setInterval(autofunc, 4500);
    this.classList.remove('active');
    drop2.classList.remove('active');
    }
}
document.querySelector('.dropdown.b').onclick = function(){
    clicks = (clicks < 1) ? clicks + 1 : 0;

    if(clicks === 1){
        clearInterval(slide);
    clearInterval(slidee);
    this.classList.add('active');
    drop3.classList.add('active');
    }
    if(clicks === 0){
        clearInterval(slide);
    clearInterval(slidee);
    slidee = setInterval(autofunc, 4500);
    this.classList.remove('active');
    drop3.classList.remove('active');
    }
}
document.querySelector('.dropdown.c').onclick = function(){
    clicks = (clicks < 1) ? clicks + 1 : 0;
   
    if(clicks === 1){
        clearInterval(slide);
    clearInterval(slidee);
    this.classList.add('active');
    drop4.classList.add('active');
    }
    if(clicks === 0){
        clearInterval(slide);
    clearInterval(slidee);
    slidee = setInterval(autofunc, 4500);
    this.classList.remove('active');
    drop4.classList.remove('active');
    }
}
const drop = document.querySelector('.btn');
    let dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach((btn) => {
        btn.addEventListener("click", drop_d);
    });

    function drop_d(){
        clicks = (clicks < 1) ? clicks + 1 : 0;
        this.classList.toggle('active');
        drop.classList.toggle('active');
        if(clicks === 1){
            clearInterval(slide);
        clearInterval(slidee);
        }
        if(clicks === 0){
            clearInterval(slide);
        clearInterval(slidee);
        slidee = setInterval(autofunc, 4500);}
        }

sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');  
    
    <div class="button"><a href="https://youtu.be/JSLFQvhY7aE?si=Lh3AFfD8aUlayyW_"target="_blank">
                        <button>Watch Now!
                        <i class="fa-brands fa-youtube fa-lg" style="color: #FF0000;"></i></button></a>

                        <a href="https://open.spotify.com/track/3rPvx8QUxjaG5oKdbAHDdw"target="_blank"><button class="spotify">Listen Now! <i class="fa-brands fa-spotify fa-lg" style="color: #1db956;"></i></button></a></div>*/