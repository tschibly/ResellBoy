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

// top selling owl carousel
$(".top-selling .product-carousel .owl-carousel").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoWidth:true,
    afterInit: setWidth(),
    responsive : {
        0: {
            items: 2
        },
        400: {
            items: 2.5
        },
        600: {
            items: 3
        },
        750: {
            items: 4
        },
        900: {
            items: 3
        },
        1000: {
            items: 4
        },
        1200: {
            items: 5
        },
        1300 : {
            items: 6
        },
        1400 : {
            items: 7
        }
    }
});

function setWidth(){
    setTimeout(function(){
        var carWidth = $('.owl-stage').width() + 1500;
        $('.owl-stage').width(carWidth);
    },800);

}
    