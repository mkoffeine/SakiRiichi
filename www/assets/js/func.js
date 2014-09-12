function get_val(v, bv){
	v = typeof v == 'string'? v.replace(/\s/g,'') : v + '';
	bv = typeof bv == 'undefined'? '100%': (typeof bv == 'string'? bv.replace(/\s/g,'') : bv + '');
	var reg = /(\d+|(\d*\.\d+))%/;
	
	if(reg.test(v)){
		var r = bv.match(reg);
		if(r == null)
			v = parseFloat(bv) * parseFloat(v) / 100;
		else
			v = (parseFloat(r[0]) * parseFloat(v) / 100) + '%';
	}else
		v = parseFloat(v);
	
	return v;
}