/*
 * Skymouse Scripts File
 * Author: Patrick Hanus
 */

/************************************************************
 * Mobile Menu Function
 ************************************************************/

function mobileMenu() {
  	document.getElementById('menu-burger').addEventListener('click',function() {
    document.getElementById('mobile-menu').classList.toggle('menu-shown');
	});
}

mobileMenu();