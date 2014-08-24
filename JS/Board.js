var Board = function(jid, cfg){
	var b = this;
	
	b.tile = [0,0,0];
	b.border = 0;
	b.offset = 0;
	b.width = '100%';
	b.height = '100%';
	
	b.parent = jQuery(jid);
	b._this = null;
	
	b.set_cfg(cfg);
}

Board.prototype.set_cfg = function(cfg){
	var b = this;
	
	b = jQuery.extend(b, cfg);
	for(var i=0; i<4; i++)
		b.tile[i] = get_val(b.tile[i]);
	b.border = get_val(b.border);
	b.offset = get_val(b.offset);
	b.width = get_val(b.width);
	b.height = get_val(b.height);
}

Board.prototype.draw = function(){
	var b = this;
	
	b._this = jQuery('<div class="board"></div>').css('width',b.width).css('height',b.height).appendTo(b.parent);
	
	return b;
}