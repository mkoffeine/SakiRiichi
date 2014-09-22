jQuery.noConflict();
jQuery(document).ready(
	function(){
		var dh = jQuery(document.body).innerHeight();
		
		var dx = jQuery(document.body).outerWidth(true) - jQuery(document.body).innerWidth();
		var dy = jQuery(document.body).outerHeight(true) - jQuery(document.body).innerHeight();
		jQuery(document.body).css({'width':(window.innerWidth - dx)+'px','height':(window.innerHeight - dy)+'px'});
		
		jQuery('#table').css({'width':'100%','height':window.innerHeight - dy - dh + 'px'});
		var board = new Board('#table').draw();
	}
);
