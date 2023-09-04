// history.scrollRestoration = "manual"
history.scrollRestoration = "auto"


/* ---- swiper ---- */  
const mainSwiper = new Swiper('.main-swiper', {
  autoplay: {
    delay: 4000,
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

var mainSwiper2 = new Swiper(".main-swiper2", {
  // direction: "horizontal",
  slidesPerView: "auto",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

var mainSwiper3menu = ['Architecture', 'sustainability', 'Customer Safety', 'Beauty Research & Innovation', 'Space' ]
const mainSwiper3 = new Swiper('.main-swiper3', {
  effect: "fade",
  loop:true,
  loopAdditionalSlides: 1,	
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (mainSwiper3menu[index]) + '</span>';
    },
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
    nextEl: ".swiper-button-next",
  },
});

/* ---- gnb ---- */  
/* ---- scroll ---- */  
function gnbScrollEvent() {
  let documentHeight = $(document).scrollTop();
  let section1Top = jQuery('.main-wrap #section1').offset().top;
  let section4Top = jQuery('.main-wrap #section4').offset().top;
  let $gnb = $('#gnb .gnb__wrap li a');
  let $header = $('header');
  let $language = $('#gnb .gnb__wrap .gnb__language');
  let $logo = $('#gnb .gnb__wrap .gnb__1d-wrap');
  let $right = $('#gnb .gnb__wrap .right');
  let $left = $('#gnb .gnb__wrap .left');


  // console.log(documentHeight, section1Top);
  if (documentHeight >= section1Top+300) {
    $right.removeClass('right2');
    $left.removeClass('left2');
    $right.addClass('right1');
    $left.addClass('left1');
    $header.hover(
      function() {
        $right.removeClass('right1');
        $left.removeClass('left1');    
        $right.addClass('right2');
        $left.addClass('left2');
      }, function() {
        $right.removeClass('right2');
        $left.removeClass('left2');
        $right.addClass('right1');
        $left.addClass('left1');
      }
    );
  } else {
    $right.removeClass('right1');
    $left.removeClass('left1');
    $right.addClass('right2');
    $left.addClass('left2');
    $logo.hover(
      function() {
        $right.removeClass('right1');
        $left.removeClass('left1');
      }
    );
  }

  if (documentHeight >= section4Top-100) {
    $gnb.addClass('color1');
    $gnb.removeClass('color2');
    $language.addClass('color1');
    $language.removeClass('color2');
  } else {
    $gnb.addClass('color2');
    $gnb.removeClass('color1');
    $language.addClass('color2');
    $language.removeClass('color1');
  }
} 

$(window).scroll(function () {
  gnbScrollEvent();
})

$(document).ready(function () {
  gnbScrollEvent();
});


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


const scrollWave = document.querySelector('.scroll-wave');
const windowHeight = window.innerHeight;
let prevScrollPosition = 0;

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  // 스크롤 방향 확인
  if (scrollPosition > prevScrollPosition) {
    // 스크롤이 내려가는 방향일 때만 스케일 변경
    const waveScale = 1 - (scrollPosition / windowHeight);
    scrollWave.style.transform = `scaleY(${waveScale})`;
  }

  prevScrollPosition = scrollPosition;
});