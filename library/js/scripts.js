/*
 * Skymouse Scripts File
 * Author: Patrick Hanus
 */

function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();

// Mobile Menu Slider Function
function mobileMenu() {
  	document.getElementById('menu-burger').addEventListener('click',function() {
    	
    	document.getElementById('mobile-menu').classList.toggle('menu-shown');
	});
}

mobileMenu();
