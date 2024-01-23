$(document).ready(function(){

  $(window).scroll(function() {
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 80) {
		//console.log('a');
		$("#header_01 .header_top .container").addClass("head_up", 2000);
	} else {
		//console.log('a');
		$("#header_01 .header_top .container").removeClass("head_up");
	}
});

  $('.candle_main_1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true
  });

  $('.main3_box').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  var controller = new ScrollMagic.Controller();

  var revealElements = document.getElementsByClassName("main5_ct");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,												 // start a little later
                triggerHook: 0.9,
              })
              .setClassToggle(revealElements[i], "show") // add class toggle
              .addTo(controller);
    }

/****glasses****/


    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll >= 80) {
      //console.log('a');
      $("#header_02").addClass("mini_nav");
      $(".head_02").addClass("mini_nav");
      $(".menu_list").addClass("mini_nav");
      $(".right_menu").addClass("mini_nav");
      $(".social_list li a").addClass("mini_nav");
    } else {
      //console.log('a');
      $("#header_02").removeClass("mini_nav");
      $(".head_02").removeClass("mini_nav");
      $(".menu_list").removeClass("mini_nav");
      $(".right_menu").removeClass("mini_nav");
      $(".social_list li a").removeClass("mini_nav");
    }
  });

    $('.glasses_main_1 >.container').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots:true
    });


/********hotel*******/


    $('#header_03').mouseover(function(e){
      $(this).css('background','rgba(34,34,34,0.7)');
    });
    $('#header_03').mouseout(function(e){
      $(this).css('background','none');
    });

		$('#header_03 .head_03 .menu_list > li').mouseover(function(e){
				$(this).children('.ab_box_04').stop();
				$(this).children('.ab_box_04').slideDown('fast');
				$(this).children('a').css('border-bottom','2px solid #fdbe37');
				$('#header_03').css('height','140px');
				});
		$('#header_03 .head_03 .menu_list > li').mouseout(function(e){
				$(this).children('.ab_box_04').stop();
				$(this).children('.ab_box_04').slideUp('fast');
				$(this).children('a').css('border-bottom','none');
				$('#header_03').css('height','90px');
				});




  $('#fullpage').fullpage({
   //options here
   autoScrolling:true,
   scrollHorizontally: false,
   nagivation: true,
   navigationPosition: 'right',
   scrollingSpeed: 500
 });

   $('.main2_container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots:true
  });


});
