
var info1 = $('.info1');

var show1 = $('.show1');
	
var buttonClickHandler = function() {
	var isActive = info1.attr('data-state');

	if (isActive == 'active') {
	info1.attr('data-state', 'inactive');	
	} else {
	info1.attr('data-state', 'active');
	}

};

show1.on('click', buttonClickHandler);


var info2 = $('.info2');

var show2 = $('.show2');
	
var buttonClickHandler2 = function() {
	var isActive = info2.attr('data-state');

	if (isActive == 'active') {
	info2.attr('data-state', 'inactive');	
	} else {
	info2.attr('data-state', 'active');
	}

};

show2.on('click', buttonClickHandler2);
