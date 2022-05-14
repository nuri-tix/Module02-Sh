import 'normalize.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import './styles/main.scss';
import './index.html';

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".offerSwiper", {
   slidesPerView: 3,
  spaceBetween: 30,
   slidesPerGroup: 3,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
  modules: [Navigation, Pagination],
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetween: 15,
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,  
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,  
      spaceBetween: 30,
    }
  }
});
 
var swiper = new Swiper(".trendsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  slidesPerScroll: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,  
      spaceBetween: 25
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,  
      spaceBetween: 30
    },
  }
});

var swiper = new Swiper(".catalogSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  slidesPerScroll: 1,
  initialSlide: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 modules: [Navigation, Pagination],
 breakpoints: {
   // when window width is >= 320px
   320: {
     slidesPerView: 2.5,
     slidesPerGroup: 1,
     spaceBetween: 10
   },
   600: {
     slidesPerView: 2.5,
     slidesPerGroup: 1,
     spaceBetween: 15
   },
   769: {
     slidesPerView: 3.5,
     slidesPerGroup: 1,  
     spaceBetween: 20
   },
 }
});