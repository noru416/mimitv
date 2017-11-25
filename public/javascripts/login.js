$(document).ready(function() {
	setting();
});
$(document).on('click', '.tabs > a', function() {
	if($(this).hasClass('active')){
      return false;
    } else {
    	$('a.active').removeClass('active');
    	$(this).addClass('active');
    	renderForm();
    }
});
$(document).on('click', '.enable', function() {
	if(typeof $.cookie('displayName') === 'undefined') {
		$('.login-fail').css({
			'visibility': 'visible'
		});
	}
});
function setting() {
	$(document).keyup(function() {
		// Get
		var username = $('input[name=username]');
		var password = $('input[name=password]');
		var displayName = $('input[name=displayName]');
		// Set
		$('input[name=username]').attr('value', username.val());
		$('input[name=password]').attr('value', password.val());
		$('input[name=displayName]').attr('value', displayName.val());
		// Get length
		var length1 = getTextLength(username.attr('value'));
		var length2 = getTextLength(password.attr('value'));;
		var length3 = getTextLength(displayName.attr('value'));

		if($('a.active').text() == 'Sign In') {
			if (length1 > 0 && length2 > 0) {
				$('.inactive').removeAttr('disabled');
				$('.inactive').addClass('enable');
				$('.inactive').removeClass('inactive');
			}
		} else {
			if (length1 > 0 && length2 > 0 && length3 > 0) {
				$('.inactive').removeAttr('disabled');
				$('.inactive').removeClass('inactive');
			}
		}
	});
}
function getTextLength(str) {
    var len = 0;
    if (str == null) {
    	return false;	
    } else {
    	for (var i = 0; i < str.length; i++) {
	        if (escape(str.charAt(i)).length == 6) {
	            len++;
	        }
	        len++;
    	}
    	return len;
    }
}