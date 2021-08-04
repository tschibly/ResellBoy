const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    
    burger.addEventListener('click' , () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 20 + 0.2}s`;
            }    
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });

}

navSlide();

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter1 = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';

nextBtn.addEventListener('click',()=>{
    if (counter1 >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter1++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';

});

prevBtn.addEventListener('click',()=>{
    if (counter1 <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter1--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';

});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter1 = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';

    }
    if (carouselImages[counter1].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter1 = carouselImages.length - counter1 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';

    }
});