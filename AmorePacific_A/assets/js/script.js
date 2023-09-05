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
      // progressContent.textContent = pagination;
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

var mainSwiper4 = new Swiper(".main-swiper4", {
  // direction: "horizontal",
  slidesPerView: "auto",
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

var subSwiper1 = new Swiper(".sub-swiper1", {  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop:true,
  loopAdditionalSlides: 1,	
  grabCursor: true,
  slidesPerView: "auto",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
});
var subSwiper2 = new Swiper(".sub-swiper2", {  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop:true,
  loopAdditionalSlides: 1,	
  grabCursor: true,
  slidesPerView: "auto",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
});
var subSwiper3 = new Swiper(".sub-swiper3", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop:true,
  loopAdditionalSlides: 1,	
  grabCursor: true,
  slidesPerView: "auto",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
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

$(function(){
	var $firstMenu = $('header .gnb__wrap'),
			$header = $('header');
	
	$firstMenu.mouseenter(function(){
		$header.addClass('gnb1');
		$header.removeClass('gnb2');
	})
	.mouseleave(function(){
		$header.addClass('gnb2');
		$header.removeClass('gnb1');
	});
});
