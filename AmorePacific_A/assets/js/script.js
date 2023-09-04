// history.scrollRestoration = "manual"
history.scrollRestoration = "auto"


/* ---- swiper ---- */  

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const mainSwiper = new Swiper('.main-swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop:true,
  loopAdditionalSlides: 1,	
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
  navigation: {
    nextEl: ".swiper-button-next",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}`;
    }
  }
});

var mainSwiper2 = new Swiper(".main-swiper2", {
  slidesPerView: 3,
  spaceBetween: 25,
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  },
});

const mainSwiper3 = new Swiper('.main-swiper3', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop:true,
  loopAdditionalSlides: 1,	
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
});

var mainSwiper3_1 = new Swiper(".main-swiper3_1", {
  direction: "vertical",
  grabCursor: true,
  slidesPerView: "auto",

});

var mainSwiper4 = new Swiper(".main-swiper4", {
  // direction: "horizontal",
  slidesPerView: "auto",
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

/* ---- gnb ---- */  
/* ---- scroll ---- */  
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('up2').addClass('up1');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('up1').addClass('up2');
        }
    }
    
    lastScrollTop = st;
}


/* ---- section3 ---- */
/* ---- hover ---- */  
function se3HoverEvent() {
  let $list1 = $('.main-wrap #section3 .list__wrap ul .list-1');
  let $list2 = $('.main-wrap #section3 .list__wrap ul .list-2');
  let $list3 = $('.main-wrap #section3 .list__wrap ul .list-3');
  let $brandImg1 = $('.main-wrap #section3 .img__wrap .img-1');
  let $brandImg2 = $('.main-wrap #section3 .img__wrap .img-2');


  $list1.hover(
    function() {
      $brandImg1.addClass('list1');
      $brandImg2.addClass('list1');
    }, function() {
      $brandImg1.removeClass('list1');
      $brandImg2.removeClass('list1');
    }
  );
  $list2.hover(
    function() {
      $brandImg1.addClass('list2');
      $brandImg2.addClass('list2');
    }, function() {
      $brandImg1.removeClass('list2');
      $brandImg2.removeClass('list2');
    }
  );
  $list3.hover(
    function() {
      $brandImg1.addClass('list3');
      $brandImg2.addClass('list3');
    }, function() {
      $brandImg1.removeClass('list3');
      $brandImg2.removeClass('list3');
    }
  );
}
$(document).ready(function () {
  se3HoverEvent();
});


// const scrollWave = document.querySelector('.scroll-wave');
// const windowHeight = window.innerHeight;
// let prevScrollPosition = 0;

// window.addEventListener('scroll', function () {
//   const scrollPosition = window.scrollY;

//   // 스크롤 방향 확인
//   if (scrollPosition > prevScrollPosition) {
//   }

//   prevScrollPosition = scrollPosition;
// });