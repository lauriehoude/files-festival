

const swiper = new Swiper('.swiperarts', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,

    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },

    }


});




const swiperlp = new Swiper(".swiper-screenshots", {

    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});