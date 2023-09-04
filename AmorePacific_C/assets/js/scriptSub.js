history.scrollRestoration = "manual"
// history.scrollRestoration = "auto"

/* ---- swiper ---- */ 
var about1menu = ['our story', 'our history', 'our values']
var aboutSwiper1 = new Swiper(".about-swiper1", {
  effect: "fade",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (about1menu[index]) + '</span>';
    },
	},
});
var about2menu = ['연구개발', '생산물류(SCM)']
var aboutSwiper2 = new Swiper(".about-swiper2", {
  effect: "fade",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (about2menu[index]) + '</span>';
    },
	},
});
var about3menu = ['Amore pacific ci', '아리따 글꼴']
var aboutSwiper3 = new Swiper(".about-swiper3", {
  effect: "fade",
  pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (about3menu[index]) + '</span>';
    },
	},
});

var careersSwiper4 = new Swiper(".careers-swiper1", {
  slidesPerView: "auto",
  grabCursor: true,
});

/* ---- gnb ---- */  
/* ---- scroll ---- */  
function gnbScrollEvent() {
  let documentHeight = $(document).scrollTop();
  let section1Top = jQuery('#section1').offset().top;
  let $header = $('header');
  let $gnb2 = $('#gnb .gnb__wrap .gnb__2d-wrap');
  let $logo = $('#gnb .gnb__wrap .gnb__1d-wrap');
  let $right = $('#gnb .gnb__wrap .right');
  let $left = $('#gnb .gnb__wrap .left');


  $header.hover(
    function() {
      $gnb2.addClass('header1');
      $gnb2.removeClass('header2');
      $header.addClass('header3');
      $header.removeClass('header4');
      $right.removeClass('right1');
      $left.removeClass('left1');    
      $right.addClass('right2');
      $left.addClass('left2');
    }, function() {
      $gnb2.addClass('header2');
      $gnb2.removeClass('header1');
      $header.addClass('header4');
      $header.removeClass('header3');
      $right.removeClass('right2');
      $left.removeClass('left2');
      $right.addClass('right1');
      $left.addClass('left1');
    }
  );

  // console.log(documentHeight, section1Top);
  if (documentHeight >= section1Top+300) {
    $right.removeClass('right2');
    $left.removeClass('left2');
    $right.addClass('right1');
    $left.addClass('left1');
    $gnb2.addClass('header2');
    $header.addClass('header4');
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
} 

$(window).scroll(function () {
  gnbScrollEvent();
})

$(document).ready(function () {
  gnbScrollEvent();
});

/* ---- sub ---- */  
/* ---- scroll ---- */  
gsap.registerPlugin(ScrollTrigger);

let $scroll1 = $('.sub-wrap #section2 .scroll__wrap .scroll-left.scroll1');
let $scroll2 = $('.sub-wrap #section2 .scroll__wrap .scroll-left.scroll2');
let $scroll3 = $('.sub-wrap #section2 .scroll__wrap .scroll-left.scroll3');
let $scroll4 = $('.careers-wrap section3 .scroll__wrap .scroll-left.scroll4');

// scroll1에 대한 ScrollTrigger 설정
gsap.to($scroll1, {
  scrollTrigger: {
    trigger: ".scroll1",
    start: "top 100px",
    endTrigger: ".scroll1",
    end: "bottom 196px",
    pin: true, // left 클래스 고정
    scrub: true, // 스크롤에 따라 부드럽게 이동
  },
});

// scroll2에 대한 ScrollTrigger 설정
gsap.to($scroll2, {
  scrollTrigger: {
    trigger: ".scroll2",
    start: "top 100px",
    endTrigger: ".scroll2",
    end: "bottom 196px",
    pin: true, // left 클래스 고정
    scrub: true, // 스크롤에 따라 부드럽게 이동
  },
});

// scroll3에 대한 ScrollTrigger 설정
gsap.to($scroll3, {
  scrollTrigger: {
    trigger: ".scroll3",
    start: "top 100px",
    endTrigger: ".scroll3",
    end: "bottom 196px",
    pin: true, // left 클래스 고정
    scrub: true, // 스크롤에 따라 부드럽게 이동
  },
});

// scroll4에 대한 ScrollTrigger 설정
gsap.to($scroll4, {
  scrollTrigger: {
    trigger: ".scroll4",
    start: "top 100px",
    endTrigger: ".scroll4",
    end: "bottom 100px",
    pin: true, // left 클래스 고정
    scrub: true, // 스크롤에 따라 부드럽게 이동
  },
});
  
/* ---- scroll ---- */  
function investorsScrollEvent() {
  // let documentHeight = $(document).scrollHeight();
  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  let section2Top = jQuery('.investors-wrap #section2').offset().top;
  let $img1 = $('.investors-wrap #section2 .grid__wrap .img1');
  let $img2 = $('.investors-wrap #section2 .grid__wrap .img2');
  let $img3 = $('.investors-wrap #section2 .grid__wrap .img3');
  let $img4 = $('.investors-wrap #section2 .grid__wrap .img4');
  let $img5 = $('.investors-wrap #section2 .grid__wrap .img5');

  console.log(scrollBottom, section2Top+100);
  if (scrollBottom >= section2Top+100) {
    $img1.addClass('up-img1');
    $img2.addClass('up-img2');
    $img3.addClass('up-img3');
    $img4.addClass('up-img4');
    $img5.addClass('up-img5');
  }
  else {
    $img1.addClass('up-img1');
    $img2.addClass('up-img2');
    $img3.addClass('up-img3');
    $img4.addClass('up-img4');
    $img5.addClass('up-img5');
  }
} 

$(window).scroll(function () {
  investorsScrollEvent();
});

/* ---- hover:gif ---- */  
function careersHoverEvent() {
  let $list2 = $('.careers-wrap #section3 .scroll__wrap .scroll-right .list__wrap ul .list2');
  let $list3 = $('.careers-wrap #section3 .scroll__wrap .scroll-right .list__wrap ul .list3');
  let $list4 = $('.careers-wrap #section3 .scroll__wrap .scroll-right .list__wrap ul .list4');
  let $list5 = $('.careers-wrap #section3 .scroll__wrap .scroll-right .list__wrap ul .list5');
  let $gif = $('.careers-wrap #section3 .scroll__wrap .scroll-left .gif__wrap');

  $list2.hover(
    function() {
      $gif.addClass('gif2');
    }, function() {
      $gif.removeClass('gif2');
    }
  );
  $list3.hover(
    function() {
      $gif.addClass('gif3');
    }, function() {
      $gif.removeClass('gif3');
    }
  );
  $list4.hover(
    function() {
      $gif.addClass('gif4');
    }, function() {
      $gif.removeClass('gif4');
    }
  );
  $list5.hover(
    function() {
      $gif.addClass('gif5');
    }, function() {
      $gif.removeClass('gif5');
    }
  );
}
$(document).ready(function () {
  careersHoverEvent();
});

// class Scrooth {
//   constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
//     this.element = element;
//     this.distance = strength;
//     this.acceleration = acceleration;
//     this.deceleration = deceleration;
//     this.running = false;

//     this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
//     this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
//     this.scroll = this.scroll.bind(this);
//   }

//   scrollHandler(e) {
//     e.preventDefault();

//     if (!this.running) {
//       this.top = this.element.pageYOffset || this.element.scrollTop || 0;
//       this.running = true;
//       this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
//       this.isDistanceAsc = true;
//       this.scroll();
//     } else {
//       this.isDistanceAsc = false;
//       this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
//     }
//   }

//   scroll() {
//     if (this.running) {
//       this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
//       Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
//       Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

//       this.top += this.currentDistance;
//       this.element.scrollTo(0, this.top);
      
//       requestAnimationFrame(this.scroll);
//     }
//   }
// }

// const scroll = new Scrooth({
//   element: window,
//   strength: 20,
//   acceleration: 1.5,
//   deceleration: 0.975,
// });