var Tile = function(jid, cfg){
	var t = this;
	
	t.tile = [0,0,0];
	t.ellipse = [0,0,0];
	t.side = [0,0,0];
	t.D = 0;
	t.R = 0;
	t.angle = [0,0,0];
	t.radians = [0,0,0];
	t.skew = [30,30];
	
	t.parent = jQuery(jid);
	t._this = null;
	
	t.set_cfg(cfg);
}

Tile.prototype.set_cfg = function(cfg){
	var t = this;
	
	if(jQuery.isAssocArray(cfg))
		for(cfg_i in cfg)
			t[cfg_i] = cfg[cfg_i];
	
	t.tile2 = [0,0,0];
	t.ellipse2 = [0,0,0];
	t.side2 = [0,0,0];
	t.tile_ = [0,0,0];
	t.side_ = [0,0,0];
	
	t.D = Math.sqrt(t.tile[0]*t.tile[0]+t.tile[1]*t.tile[1]+t.tile[2]*t.tile[2]);
	t.R = t.D/2;
	
	t.R_ = Math.ceil(t.R) + 50;
	t.D_ = t.R_ * 2;
	
	t.tileM = [Math.max(t.tile[0],t.tile[1]),Math.max(t.tile[0],t.tile[2]),Math.max(t.tile[1],t.tile[2])]; 
	t.tileM2 = [0,0,0];
	for(var i=0;i<3;i++){
		// ellipse
		var v = (t.ellipse[i]+'').match(/^(\d+\.\d*)%$/);
		if(v != null)
			t.ellipse[i] = Math.min(Number(v[0])/100 * t.tile[i], 0);
		// side
		t.side[i] = t.tile[i] - t.ellipse[i];
		// radians
		t.radians[i] = t.angle[i]*Math.PI/180;
		
		t.tile2[i] = t.tile[i]/2;
		t.side2[i] = t.side[i]/2;
		t.ellipse2[i] = t.ellipse[i]/2;
		t.tileM2[i] = t.tileM[i]/2;
		
		t.tile_[i] = t.R - t.tile2[i];
		t.side_[i] = t.R - t.side2[i];
	}
	
	t.tileP = [[t.tile[0]/t.tileM[0],t.tile[1]/t.tileM[0]],[t.tile[0]/t.tileM[1],t.tile[2]/t.tileM[1]],[t.tile[1]/t.tileM[2],t.tile[2]/t.tileM[2]]]; 
}

Tile.prototype.draw = function(){
	var t = this;
	var txt = '';
	txt += '<div class="tile" style="width:'+t.D+'px;height:'+t.D+'px;margin:0;padding:0;display:inline-block;">';
	txt += '<div style="position:absolute;width:'+t.D+'px;height:'+t.D+'px;margin:0;padding:0;border:1px solid;box-sizing:content-box;">';
	txt += '<div style="position:absolute;width:'+t.D+'px;height:'+t.D+'px;margin:0;padding:0;border:1px solid;border-radius:'+t.R+'px;box-sizing:border-box;position:absolute;">';
	
	txt += '<div class="top side" style="position:absolute; width:'+t.side[1]+'px; height:'+t.side[0]+'px; background-color:#aa0; transform-origin:'+t.R+'px '+t.R+'px '+t.R+'px; transform: skew3d('+Math.sin(t.skew[0]*Math.PI/180)+','+Math.sin(t.skew[1]*Math.PI/180)+',0) rotateX('+t.angle[1]+'deg) rotateY('+t.angle[2]+'deg) rotateZ('+t.angle[0]+'deg) translate3d('+t.side_[1]+'px,'+t.side_[0]+'px,'+(t.tile_[2]+t.tile[2])+'px); border-radius: '+t.ellipse2[1]+'px '+t.ellipse2[0]+'px;z-index:100;"></div>';
	
	txt += '<div class="bottom side" style="position:absolute; width:'+t.side[1]+'px; height:'+t.side[0]+'px; background-color:#5a5; transform-origin:'+t.R+'px '+t.R+'px '+t.R+'px; transform: rotateX('+t.angle[1]+'deg) rotateY('+t.angle[2]+'deg) rotateZ('+t.angle[0]+'deg) translate3d('+t.side_[1]+'px,'+t.side_[0]+'px,'+t.tile_[2]+'px); border-radius: '+t.ellipse2[1]+'px '+t.ellipse2[0]+'px;z-index:0;"></div>';
	
	txt += '</div>';
	txt += '</div>';
	txt += '</div>';
	t._this = jQuery(txt).appendTo(t.parent);
	return this;
}

jQuery.isAssocArray = function(arr){
	if(typeof arr == 'object'){
		for(var arr_i in arr)
			if(typeof arr[arr_i] == 'function')
				return false;
		return true;
	}
	return false;
}