
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
  	setInterval(function(){ beeJump(); }, 5000);
    // setInterval(function(){ callTada(); }, 1000);
    setInterval(function(){ movePencil(); }, 3000);
});



// Defining Functions

function beeJump() {
  $(".header svg").toggleClass("bee-jump");
}

// function callTada() {
// 	var randNum = Math.floor(Math.random() * $(".section2 i").length) + 1;
// 	$(".section2 i").eq(randNum).addClass("tada").siblings().removeClass("tada");
// }

function movePencil() {
	$(".pencil").toggleClass("movePencil");
}


});



