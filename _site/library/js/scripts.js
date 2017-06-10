/*
 * Skymouse Scripts File
 * Author: Patrick Hanus
 */

// Help Scout Beacon
	function(e, o, n) {
	    window.HSCW = o, window.HS = n, n.beacon = n.beacon || {};
	    var t = n.beacon;
	    t.userConfig = {}, t.readyQueue = [], t.config = function(e) {
	        this.userConfig = e
	    }, t.ready = function(e) {
	        this.readyQueue.push(e)
	    }, o.config = {
	        docs: {
	            enabled: !1,
	            baseUrl: ""
	        },
	        contact: {
	            enabled: !0,
	            formId: "f3be6a56-39b7-11e7-9841-0ab63ef01522"
	        }
	    };
	    var r = e.getElementsByTagName("script")[0],
	        c = e.createElement("script");
	    c.type = "text/javascript", c.async = !0, c.src = "https://djtflbt20bdde.cloudfront.net/", r.parentNode.insertBefore(c, r)
	}(document, window.HSCW || {}, window.HS || {});

// Config for the beacon
HS.beacon.config({
    color: '#cacaca',
    translation: {
      searchLabel: 'En que podemos ayudarte?',
      searchErrorLabel: 'Lo sentimos, hubo un error con tu busqueda'
    },
    topics: [
      { val: 'need-help', label: 'Need help with the product' },
      { val: 'bug', label: 'I think I found a bug'}
    ],
    attachment: true,
    instructions:'This is instructional text that goes above the form.',
    contactSuccessLabel:'Bombs away!'
	contactSuccessDescription:'Your message has been sent, check out your email for a confirmation email and ',
	sendLabel: 'Boom!'
  });
// End HelpScout Beacon

function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();

// Mobile Menu Slider Function
function mobileMenu() {
  jQuery('div#menu-burger').on('click', function() {
    jQuery('nav#menu').toggleClass('menu-shown');
});
}

jQuery(document).ready(function() {
  mobileMenu();
}); 
