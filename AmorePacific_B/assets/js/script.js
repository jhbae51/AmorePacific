// history.scrollRestoration = "manual"
history.scrollRestoration = "auto"


/* ---- swiper ---- */  
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
  let section4Top = jQuery('.main-wrap #section4').offset().top;
  let $section3 = $('.main-wrap #section3');
  let $section4 = $('.main-wrap #section4');
  let $section5 = $('.main-wrap #section5');
  
  $section3.addClass('color3');
  $section3.removeClass('color4');
  $section4.addClass('color3');
  $section4.removeClass('color4');
  $section5.addClass('color3');
  $section5.removeClass('color4');

  if (documentHeight >= section4Top-700) {
    $section3.addClass('color4');
    $section3.removeClass('color3');
    $section4.addClass('color4');
    $section4.removeClass('color3');
    $section5.addClass('color4');
    $section5.removeClass('color3');
  } else {
    $section3.addClass('color3');
    $section3.removeClass('color4');
    $section4.addClass('color3');
    $section4.removeClass('color4');
    $section5.addClass('color3');
    $section5.removeClass('color4');
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
      $brandImg1.removeClass('list2');
      $brandImg2.removeClass('list2');
      $brandImg1.removeClass('list3');
      $brandImg2.removeClass('list3');
      $list1.addClass('active');
      $list2.removeClass('active');
      $list3.removeClass('active');
    }, function() {
      // $brandImg1.removeClass('list1');
      // $brandImg2.removeClass('list1');
    }
  );
  $list2.hover(
    function() {
      $brandImg1.addClass('list2');
      $brandImg2.addClass('list2');
      $brandImg1.removeClass('list1');
      $brandImg2.removeClass('list1');
      $brandImg1.removeClass('list3');
      $brandImg2.removeClass('list3');
      $list2.addClass('active');
      $list1.removeClass('active');
      $list3.removeClass('active');
    }, function() {
      // $brandImg1.removeClass('list2');
      // $brandImg2.removeClass('list2');
    }
  );
  $list3.hover(
    function() {
      $brandImg1.addClass('list3');
      $brandImg2.addClass('list3');
      $brandImg1.removeClass('list1');
      $brandImg2.removeClass('list1');
      $brandImg1.removeClass('list2');
      $brandImg2.removeClass('list2');
      $list3.addClass('active');
      $list1.removeClass('active');
      $list2.removeClass('active');
    }, function() {
      // $brandImg1.removeClass('list3');
      // $brandImg2.removeClass('list3');
    }
  );
}
$(document).ready(function () {
  se3HoverEvent();
});
