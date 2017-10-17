$(document).ready(function(){
	$('.acc-head').on('click', function (){
		$('.acc-body').not($(this)).slideUp(500);
		// $('.acc-body').slideUp(500);
		$(this).next().slideToggle(1000);
	});
}); 