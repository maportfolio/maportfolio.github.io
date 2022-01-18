// Navbar burger
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
	// Add a click event on each of them
	$navbarBurgers.forEach( el => {
	  el.addEventListener('click', () => {
  	  	// Get the target from the "data-target" attribute
  	  	const target = el.dataset.target;
		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		el.classList.toggle('is-active');
  
	  });
	});
  }
  
  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('.col .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
  	  if (window.getComputedStyle(navbarToggler).display !== 'none') {
  	  	navbarToggler.click();
  	  }
    });
  });

});
  
// Scroll to top
// Get the button:
mybutton = document.getElementById("myBtn");
  
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	mybutton.style.display = "block";
  } else {
	mybutton.style.display = "none";
  }
}
  
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Type effect
;(function() {
  'use strict';

  var element, string, length;

  element = document.querySelector('.screen');
  string  = element.innerText;
  length  = string.length;

  function timer(delay, repetitions) {
	var n, i;
	
	n = 0;
	i = window.setInterval(function () {
	  element.innerText = string.substring(0, n);
	  if (n++ === repetitions) {
	  window.clearInterval(i);
	  }
	}, delay);
  }

  timer(185, length);

})();

// ...............
var i = 0;
var a3 = $('#a3');
var a4 = $('#a4');
var a5 = $('#a5');
var a8 = $('#a8');
var f2 = $('#f2');
var f1 = $('#f1');
var f5 = $('#f5');

for (i = 1; i < 5; i++) {      
	a3.append('<span class=a3'+i+'></span>');
	$('.a3'+i+'').css({
		'-webkit-animation' : 'a3 1s '+(Math.random()*2)+'s  infinite',
		'-moz-animation' : 'a3 1s '+(Math.random()*2)+'s  infinite'
	}); 
}
setInterval(function() {
	$('#a3 span').each(function() {
    		$(this).text(Math.ceil(Math.random()*999));;
	});
}, 100); 

for (i = 1; i < 15; i++) {      
	a4.append('<span class=a3'+i+'></span>');
	setInterval(function() {
		$('#a4 span').each(function() {
			$(this).width((Math.random()*15));
		});
	}, 500);		
}

for (i = 1; i < 16; i++) {      
	a5.append('<span><b class=a5'+i+'></b></span>');
	$('.a5'+i+'').css({
		'-webkit-animation' : 'a3 1s 0.'+i+'s  infinite',
		'-moz-animation' : 'a3 1s 0.'+i+'s  infinite'
	}); 		
}

setInterval(function() {
	var h = Math.ceil(Math.random()*24);
	var m = Math.ceil(Math.random()*60);
	if (h<10) {$('.a731').text('0'+h+':');}
	else {$('.a731').text(h+':');}
	if (m<10) {$('.a732').text('0'+m);}
	else {$('.a732').text(m);}		
}, 100);

setInterval(function() {
	var d = Math.ceil(Math.random()*30);
	var m = Math.ceil(Math.random()*12);
	var min = 1700, max = 1999;
	var rand = min - 0.5 + Math.random()*(max-min+1)
	rand = Math.round(rand);

	if (d<10) {$('.a741').text('0'+d+'/');}
	else {$('.a741').text(d+'/');}
	if (m<10) {$('.a742').text('0'+m+'/');}
	else {$('.a742').text(m+'/');}	
	$('.a743').text(rand);	
}, 50);	

for (i = 1; i < 41; i++) {      
	a8.append('<span></span>');	
}

setInterval(function() {
	var mino = 10000, maxo = 99999;
	var rand = mino - 0.5 + Math.random()*(maxo-mino+1);
	rand = Math.round(rand);
	
	var mine = 100000000, maxe = 999999999;		
	var ran = mine - 0.5 + Math.random()*(maxe-mine+1);
	ran = Math.round(ran);		
	
	$('#a9 span:odd').text(rand);
	$('#a9 span:even').text(ran);		

}, 100); 


for (i = 1; i < 37; i++) {      
	f2.append('<span class=f2'+i+'></span>');
	$('.f2'+i+'').css({
		'-webkit-transform' : 'rotateZ('+i+'0deg) translateY(95px)'
	}); 		
}

for (i = 1; i < 19; i++) {      
	f5.append('<span class=f5'+i+'><b>'+Math.random()*30+'</b></span>');
	$('.f5'+i+'').css({
		'-webkit-transform' : 'rotateZ('+i*2+'0deg) translateY(40px)'
	}); 		
}	

for (i = 1; i < 13; i++) {      
	f1.append('<span class=f1'+i+'></span>');
	$('.f1'+i+'').css({
		'-webkit-transform' : 'rotateZ('+i*30+'deg) translateY(91px)'
	}); 		
}