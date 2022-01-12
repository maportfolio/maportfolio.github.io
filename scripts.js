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