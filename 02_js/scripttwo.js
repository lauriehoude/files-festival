const swiper = new Swiper('.swiper', {
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
   
  
  