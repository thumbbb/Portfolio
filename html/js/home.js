$(document).ready(function(){

  $('.banner').unslider({
	speed:0,               //  The speed to animate each slide (in milliseconds)
	delay: 5000,              //  The delay between slide animations (in milliseconds)
  autoplay: true,
	dots: true,
	fluid: true,
  arrows: {
    prev: '<a class="' + self._ + '-arrow prev">←</a>',
    next: '<a class="' + self._ + '-arrow next">→</a>'
  }
});


var svg = $('.wave img');

function wavescrollMagic(){
	var controller = new ScrollMagic.Controller();

	var tween1 = TweenMax.to(svg, 0.8, {
		right:-2000
	});

	var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger1",
		duration: 400,
		offset:'0%',
	})
	.setTween(tween1)
	.addTo(controller)

};
wavescrollMagic();


//scroll motion
var scroll = $('.scroll');
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	if($('html').hasClass('is-ie')){
		if(wScroll>=$('.main_2').offset().top-$(window).height()/4){
			//console.log('ii');
			scroll.addClass('hide');
		}else{
			scroll.removeClass('hide');
		}
	}else{
		if(wScroll>=$('.main_1').offset().top-$(window).height()/7){
			//console.log('ii');
			scroll.addClass('hide');
		}else{
			scroll.removeClass('hide');
		}

	}
});


//메뉴 제이쿼리
 $("#header #origin_btn").click(function(){
  $("body").css({"overflow":"hidden"});
  $(".all_menu").css({"height":"100vh"}).show(700);

});

 $("#header .all_menu .close").click(function(){
  $(".all_menu").hide(700);
  $("body").css({"overflow-y":"auto"});
 });
 //media menu

 $("#header #media_btn").click(function(){
   $('#media_menu').css({"width":"51%"}).show();
});

  $(".media_close").click(function(){
   $("#media_menu").css({"width":"0"}).hide(700);
});

//media_menu

// variables
var accordionBtn = document.querySelectorAll('#media_menu .menubg .am_right .amr_d1 > li > a');
var allTexts = document.querySelectorAll('.amr_d2');
var accIcon = document.querySelectorAll('.menu_plus');

// event listener
accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
   var targetText = el.currentTarget.nextElementSibling.classList;
   var targetAccIcon = el.currentTarget.children[0];
   var target = el.currentTarget;

   if (targetText.contains('show')) {
       targetText.remove('show');
       targetAccIcon.classList.remove('anime');
       target.classList.remove('accordionActive');
   }
   else {
      accordionBtn.forEach(function (el) {
         el.classList.remove('accordionActive');

         allTexts.forEach(function (el) {
            el.classList.remove('show');
         })

         accIcon.forEach(function (el) {
          el.classList.remove('anime');
         })

      })
         targetText.add('show');
         target.classList.add('accordionActive');
         targetAccIcon.classList.add('anime');
   }
}
//배너에 예약하기 버튼 색채우기
$(function() {
  $(".reserve-button").on('mouseenter', function(e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find("span").css({
      top: y,
      left: x
    });
  });
  $(".reserve-button").on('mouseout', function(e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find("span").css({
      top: y,
      left: x
    });
  });
});
//소개하기
  $ (".xi-arrow-down") .click (function () {
  $ (".intro_ct") .animate ({scrollDown : 500}, 1000);
  });
 //main_02
 var controller = new ScrollMagic.Controller();

 var revealElements = document.getElementsByClassName("lent");
   for (var i=0; i<revealElements.length; i++) { // create a scene for each element
     new ScrollMagic.Scene({
               triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
               offset: 50,												 // start a little later
               triggerHook: 0.9,
             })
             .setClassToggle(revealElements[i], "show_lent") // add class toggle
             .addTo(controller);
   }

   var controller = new ScrollMagic.Controller();

   var revealElements = document.getElementsByClassName("lent_2");
     for (var i=0; i<revealElements.length; i++) { // create a scene for each element
       new ScrollMagic.Scene({
                 triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                 offset: 50,												 // start a little later
                 triggerHook: 0.9,
               })
               .setClassToggle(revealElements[i], "show_lent_2") // add class toggle
               .addTo(controller);
     }

//media_main_2
$('.media_main2_box').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true
});
//main_3
var controller = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName("popular_img");
  for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
              triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
              offset: 50,												 // start a little later
              triggerHook: 0.9,
            })
            .setClassToggle(revealElements[i], "popular_show") // add class toggle
            .addTo(controller);
  }

//버튼 색채우기
  $(function() {
    $(".action-button > a").on('mouseenter', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
    $(".action-button > a").on('mouseout', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
  });

//media_main_4

$('.media_main_4 .review_box').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

//main_5

$('.main_5').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true
});

//main_6


 $("#coupon_dw_01").click(function(){
   $(".popup_back").addClass("loginpopup");
 });
 $("#coupon_dw_02").click(function(){
   $(".popup_back").addClass("loginpopup");
 });
 $("#coupon_dw_03").click(function(){
   $(".popup_back").addClass("loginpopup");
 });
 $(".login_close").click(function(){
   $(".popup_back").removeClass("loginpopup");
 });
 $("#cancle").click(function(){
   $(".popup_back").removeClass("loginpopup");
 });
//로그인 팝업 예약하기 누르면띄우기
$("#reserve .reserve-button").click(function(){
  $(".popup_back").addClass("loginpopup");
});
$("#cancle").click(function(){
   $(".popup_back").removeClass("loginpopup");
});
$(".login_close").click(function(){
   $(".popup_back").removeClass("loginpopup");
});
//노하우 탭 띄우기
 $(".tip_1").click(function(){
  $(".tab_box_1").show();

 });

 $(".xbt_1").click(function(){
  $(".tab_box_1").hide();

 });

  $(".tip_2").click(function(){
   $(".tab_box_2").show();

  });

  $(".xbt_2").click(function(){
   $(".tab_box_2").hide();

  });

  $(".tip_3").click(function(){
   $(".tab_box_3").show();

  });

  $(".xbt_3").click(function(){
   $(".tab_box_3").hide();

  });



 //footer

    $(".xi-angle-up-min").click(function(){
      $(".f_right").show();
    });
    $(".xi-close-min").click(function(){
      $(".f_right").hide();
    });

    $ ( '.top') .click (function () {
  	$ ( 'html, body') .animate ({scrollTop : 0}, 1000);
  });
});
