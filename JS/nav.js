
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
	beeJump();
  setInterval(function(){ scrollTada(); }, 5000);
  setInterval(function(){ beeJump(); }, 5000);
  setInterval(function(){ movePencil(); }, 3000);
    // setInterval(callTada, 4000);
});



// Defining Functions

function beeJump() {
  $(".header svg").toggleClass("bee-jump");
}

function callTada() {
		$(".section2 i").toggleClass("tada")
		// .siblings().removeClass("tada");
}

function scrollTada() {
  $(".scroll").toggleClass("tada");
}

function movePencil() {
	$(".pencil").toggleClass("movePencil");
}

$(window).scroll(function() {
   var hT = $('.scroll-to').offset().top,
       hH = $('.scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       callTada();
   }
});


var $doodle_me = $(".doodle-me");
var $window = $(window);

$window.on('scroll resize', check_if_in_view);

});



