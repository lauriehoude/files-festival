const swiperlp = new Swiper(".swiper-screenshots", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 85,
        },
    },
});
alert("asa")


const swiperapp = new lwiper(".swiper-filters", {
    direction: "horizontal",
    freeMode: {
        enable: true,
    },
});


const swiperappartworks = new lwiper(".swiper-featured-artworks", {
    direction: "horizontal",
    grabCursor: true,
    freeMode: {
        enable: true,
    },
    slidesPerView: 2.1,
    spaceBetween: 10,


});