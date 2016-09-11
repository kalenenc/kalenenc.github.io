
$(document).ready(function(){


// Navigation

$('.nav-icon').on('click', function() {
  this.classList.toggle('active');
});


$(".nav-icon").on("click", function(){
	$('nav ul').slideToggle();
});

// Function Calls

$(function(){
	// beeJump();
  setInterval(function(){ scrollTada(); }, 5000);
  // setInterval(function(){ beeJump(); }, 5000);
  setInterval(function(){ movePencil(); }, 3000);
    // setInterval(callTada, 4000);
});




// Defining Functions

// function beeJump() {
//   $(".header svg").toggleClass("bee-jump");
// }

// function callTada() {
// 		$(".section2 i").toggleClass("tada")
// 		// .siblings().removeClass("tada");
// }

// function scrollTada() {
//   $(".scroll").toggleClass("tada");
// }

function movePencil() {
	$(".pencil").toggleClass("movePencil");
}

// $(window).scroll(function() {
//    var hT = $('.scroll-to').offset().top,
//        hH = $('.scroll-to').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//    if (wS > (hT+hH-wH)){
//        callTada();
//    }
// });



var $animation_elements = $(".moving-icons ");
var $window = $(window);


function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('tada');
    } else {
      $element.removeClass('tada');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// ----

var $animated_pencil = $(".pencil ");
var $window = $(window);

function check_if_pencil_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animated_pencil, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('movePencil');
    } else {
      $element.removeClass('movePencil');
    }
  });
}

$window.on('scroll resize', check_if_pencil_in_view);
$window.trigger('scroll');

// ----

var $animated_bee = $(".bee ");
var $window = $(window);

function check_if_bee_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animated_bee, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('bee-jump');
    } else {
      $element.removeClass('bee-jump');
    }
  });
}

$window.on('scroll resize', check_if_bee_in_view);
$window.trigger('scroll');

// ----

var $animated_scroll = $(".scroll ");
var $window = $(window);

function check_if_scroll_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animated_scroll, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('tada');
    } else {
      $element.removeClass('tada');
    }
  });
}

$window.on('scroll resize', check_if_scroll_in_view);
$window.trigger('scroll');


});



