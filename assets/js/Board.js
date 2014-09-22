var Board = function(jid, cfg){
	var b = this;
	
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
}

Board.prototype.draw = function(){
	var b = this;
	var w, h, jel;
	
	b._this = jQuery('<div class="board"></div>').css({'width':b.width,'height':b.height}).appendTo(b.parent);
	
	b.bw = Math.floor(b._this.innerWidth()); // bw, bh = 4*tw*4+2*tw+3*ko+2*nto + th+so = 216 + 17 + 6 + 0 + 11
	b.bh = Math.floor(b._this.innerHeight()); // th : tw : tz ~= 17 : 12 : 7, tw : ko : nto : so ~= 12 : 2 : 6 : 11 
	b.bk = (Math.min(b.bw, b.bh)*0.0035).toFixed(3); // 216 * 0.35% = 75.6%
	b.bk2 = (Math.min(b.bw, b.bh)*0.006).toFixed(3); // 34 * 0.6% = 20.4%
	b.tile = [(17*b.bk).toFixed(3), (12*b.bk).toFixed(3), (7*b.bk).toFixed(3)]; // th, tw, tz
	b.offset = [(2*b.bk2).toFixed(3), (11*b.bk2).toFixed(3)]; // ko, so
	b.border = [(b.bw*0.01).toFixed(3),(b.bh*0.01).toFixed(3)];
	
	b._this.css({
				'border-width':b.border[1]+'px '+b.border[0]+'px',
				'border-style':'outset',
				'box-sizing':'border-box',
				'border-color':'#cc6 #884 #844 #cc6',
				'background-color':'#aa5',
				'border-radius':b.border[1]+'px '+b.border[0]+'px',
			});
	b._this2 = jQuery('<div></div>').css({
				'width':b.bw-6*b.border[0]+'px',
				'height':b.bh-6*b.border[1]+'px',
				'border-width':b.border[1]+'px '+b.border[0]+'px',
				'border-style':'inset',
				'box-sizing':'border-box',
				'border-color':'#cc6 #884 #884 #cc6',
				'background-color':'#fff',
				'border-radius':b.border[1]+'px '+b.border[0]+'px',
				'margin':2*b.border[1]+'px '+2*b.border[0]+'px',
			}).appendTo(b._this);
	
	b._players = [{},{},{},{}];
	w = (b.bw - b.tile[0] - b.offset[1] - 6*b.border[0]).toFixed(3);
	h = (b.bh - b.tile[0] - b.offset[1] - 6*b.border[1]).toFixed(3);
	dx = b._this.offset().left + 4*b.border[0];
	dx2 = window.innerWidth - b._this.offset().left - b._this.outerWidth() + 4*b.border[0];
	dy = b._this.offset().top + 4*b.border[1];
	dy2 = window.innerHeight - b._this.offset().top - b._this.outerHeight() + 4*b.border[1];
	
	b._players[0]['side'] = jQuery('<table class="side player0" cellspacing="0" cellpadding="0"></table>').css({
				'width':w+'px',
				'height':b.tile[0]+'px',
				'right':dx2+'px',
				'bottom':dy2+'px',
				'text-align':'center',
				'vertical-align':'bottom',
			}).appendTo(b._this2);
	b._players[1]['side'] = jQuery('<table class="side player1" cellspacing="0" cellpadding="0"></table>').css({
				'height':h+'px',
				'width':b.tile[0]+'px',
				'right':dx2+'px',
				'top':dy+'px',
				'text-align':'right',
				'vertical-align':'center',
			}).appendTo(b._this2);
	b._players[2]['side'] =  jQuery('<table class="side player2" cellspacing="0" cellpadding="0"></table>').css({
				'width':w+'px',
				'height':b.tile[0]+'px',
				'left':dx+'px',
				'top':dy+'px',
				'text-align':'center',
				'vertical-align':'top',
			}).appendTo(b._this2);
	b._players[3]['side'] =  jQuery('<table class="side player3" cellspacing="0" cellpadding="0"></table>').css({
				'height':h+'px',
				'width':b.tile[0]+'px',
				'left':dx+'px',
				'bottom':dy+'px',
				'text-align':'left',
				'vertical-align':'center',
			}).appendTo(b._this2);
	jQuery('.side').css({
				'position':'absolute',
				'background-color':'#afa',
				//'border':'1px solid',
				//'box-sizing':'border-box',
			});
	
	jQuery('.player0,.player2').append('<tr>' + ('<td>&nbsp;</td>').repeat(3));
	jQuery('.player1,.player3').append(('<tr><td>&nbsp;</td>').repeat(3));
	
	jQuery('.player0 td:nth-child(3n+1), .player1 tr:nth-child(3n) td, .player2 td:nth-child(3n), .player3 tr:nth-child(3n+1) td').toggleClass('hand');
	jQuery('.player0 td:nth-child(3n+2), .player1 td:nth-child(3n+2), .player2 td:nth-child(3n+2), .player3 td:nth-child(3n+2)').toggleClass('tsumo');
	jQuery('.player0 td:nth-child(3n), .player1 tr:nth-child(3n+1) td, .player2 td:nth-child(3n+1), .player3 tr:nth-child(3n) td').toggleClass('sets');
	
	jQuery(('<div class="tile"></div>').repeat(17)).appendTo('.hand').css({
				'background-color':'lime',
				'display':'inline-block',
				//'border':'1px solid'
			});
	jQuery('.player0 .tile,.player2 .tile').css({'width':b.tile[1]+'px','height':b.tile[0]+'px'});
	jQuery('.player1 .tile,.player3 .tile').css({'width':b.tile[0]+'px','height':b.tile[1]+'px'});
	
	return b;
}