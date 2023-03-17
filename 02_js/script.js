const swiperlp = new Swiper(".swiper-screenshots", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});



const swiperapp = new Swiper(".swiper-filters", {

    slidesPerView: 2,
    spaceBetween: 0,
    grabCursor: true,


});


const swiperappartworks = new Swiper(".swiper-featured-artworks", {
    direction: "horizontal",
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,


});