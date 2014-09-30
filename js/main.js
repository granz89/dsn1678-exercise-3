var theHeader = $('.the-header');
var theButton = $('.the-button');

/*
	Functions are reusable pieces of code
	They're basically code stored inside variables
*/

var buttonClickHandler = function () {
	var isActive = theHeader.attr('data-state');

	if (isActive == 'active') {
		theHeader.attr('data-state', 'inactive');

	} else {
	  theHeader.attr('data-state', 'active');


	}

};

theButton.on('click', buttonClickHandler);