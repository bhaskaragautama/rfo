function generateDate(date,birthday,festival){
	var elem = '<div class="col-2"><div class="date"><div class="date-header"><span class="date-number">'+date+'</span><span class="date-symbol">';
	if(festival){
		elem += '<i class="fas fa-star"></i> ';
	}
	if(birthday){
		elem += '<i class="fas fa-gift"></i>';
	}
	elem += '</span></div><div class="date-body" data-date="'+date+'">';
	if(festival){
		elem += '<div class="list festival" data-name="'+festival[0]+'" data-highlight="'+festival[1]+'" data-desc="'+festival[2]+'"><i class="fas fa-star"></i> '+festival[0]+'</div>';
	}
	if(birthday){
		birthday.forEach(function(element, index) {
			elem += '<div class="list birthday" data-name="'+birthday[index][0]+'" data-img="'+birthday[index][1]+'" data-loves="'+birthday[index][2]+'" data-likes="'+birthday[index][3]+'" data-hates="'+birthday[index][4]+'"><i class="fas fa-gift"></i> '+birthday[index][0]+'</div>';
		});
	}
	elem += '</div></div></div>';
	return(elem);
}