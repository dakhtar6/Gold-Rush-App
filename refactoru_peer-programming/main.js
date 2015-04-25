$(document).on('ready', function() {

	$('.map-container').on('click', function(event) {

		$('.pickaxe-container').first()
			.clone()
			.removeClass('inactive')
			.appendTo('.map-container')
			.css({left: event.pageX - 20, top: event.pageY - 20});
			console.log('x event:', event.pageX);
			console.log('y event:', event.pageY);
	});

	$('.map-container').on('click', '.map-marker', function(event) {

		$(this).addClass('inactive');

		event.stopPropagation();

	});
  
});