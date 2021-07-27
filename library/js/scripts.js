/*
 * Skymouse Scripts File
 * Author: Patrick Hanus
 */

(function() {
  
  var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
  /* http://youmightnotneedjquery.com/#ready */
  function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading')
          fn();
      });
    }
  }
  /* http://youmightnotneedjquery.com/#each */
  function forEachElement(selector, fn) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
      fn(elements[i], i);
  }
  function openSidebar(driftApi, event) {
    event.preventDefault();
    driftApi.sidebar.open();
    return false;
  }
  ready(function() {
    drift.on('ready', function(api) {
      var handleClick = openSidebar.bind(this, api)
      forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
        el.addEventListener('click', handleClick);
      });
    });
  });
})();

/************************************************************
 * Website EXAMPLE POPUP
 ************************************************************/

$(".button").on("click", function() {
  var modal = $(this).data("modal");
  $(modal).addClass( "popup-show" );
});

$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").removeClass( "popup-show" );
  }
});

/************************************************************
 * Mobile Menu Function
 ************************************************************/

function mobileMenu() {
  	document.getElementById('menu-burger').addEventListener('click',function() {
    document.getElementById('mobile-menu').classList.toggle('menu-shown');
    document.getElementById('line').classList.toggle('exit');
	});
}

mobileMenu();

// Select all links with hashes
jQuery('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = jQuery(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  }); 

/************************************************************
* DARK MODE BUTTON
å************************************************************/

// Select the button
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-mode");
  } else {
    document.body.classList.toggle("light-mode");
  }
 
// Listen for a click on the button 
btn.addEventListener("click", function() {
  
  if (prefersDarkScheme.matches) {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
      var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    } else {
      document.body.classList.toggle("light-mode");
      document.body.classList.toggle("dark-mode");
      var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    }

  localStorage.setItem("theme", theme);
});