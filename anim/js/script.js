$(document).ready(function(){
	$('#hide').on('click', function(){
		$('.test').fadeOut(2000);
	});
	$('#show').on('click', function(){
		$('.test').fadeIn(2000);
	});
	$('#toggle').on('click', function(){
		$('.test').fadeToggle(2000);
	});
}); 