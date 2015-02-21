var fight = function(option){
	$('#wrapper').html("");

	var dimension = prompt('Enter your dimensions, between 1 and 128');

	if (dimension >= 1 && dimension <= 128){	
		var square_size = $('#wrapper').width()/dimension - 2;	

		for(var i = 1; i <= dimension; i++){
			for(var j = 1; j <= dimension; j++){
				$('#wrapper').append('<div class="col"></div>');
			}
			$('#wrapper').append('<div class="new_row"></div>');
		}
		$('.col').css('width',square_size);
		$('.col').css('height',square_size);

		$('.col').mouseenter(function(){
			switch(option){
				case 1:
					$(this).addClass('colNew');
					break;
				case 2:
					var currentOpacity = $(this).css('opacity');
					if(currentOpacity > 0){
						$(this).css('opacity', currentOpacity - 0.1);
					}
					break;
			}
		});
	}
	else{
		alert('Please click a button, or get lost.');
	}
}