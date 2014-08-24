jQuery.noConflict();
jQuery(document).ready(
	function(){
		jQuery(document.body).css('height',window.innerHeight);
		
		var board = new Board('body').draw();
	}
);
