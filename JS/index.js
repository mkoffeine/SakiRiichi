jQuery.noConflict();
jQuery(document).ready(
	function(){
		//jQuery(document.body).css('border','1px solid');
		var dx = jQuery(document.body).outerWidth(true) - jQuery(document.body).innerWidth();
		var dy = jQuery(document.body).outerHeight(true) - jQuery(document.body).innerHeight();
		jQuery(document.body).css({'width':(window.innerWidth - dx)+'px','height':(window.innerHeight - dy)+'px'});
		var board = new Board('body').draw();
	}
);
