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
 * Mobile Menu Function
 ************************************************************/

function mobileMenu() {
  	document.getElementById('menu-burger').addEventListener('click',function() {
    document.getElementById('mobile-menu').classList.toggle('menu-shown');
	});
}

mobileMenu();