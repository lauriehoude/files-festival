



const swiperlp = new Swiper(".swiper-screenshots", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
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