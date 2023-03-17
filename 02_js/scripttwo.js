const mySwiperlp = new Swiper(swiperContainer, parameters);

const swiperlp = new Swiper(".swiperarts", {

    direction: "horizontal",
    loop: true,
    centeredSlides: true,
   
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        400: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

alert("asa")