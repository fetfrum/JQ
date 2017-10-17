$(document).ready(function(){
	$("p").css({
		"color": "red",
		"background": "black"
	});
	$('p').on('click', go);
	$('div').one('click', function(){
		alert("work"); 	
	})

	console.log($('#three').attr('id'));
	console.log($('.two').attr('data'));

	$('p,div').eq(1).css('color', 'yellow');

	$('.two').addClass('five');
	function go(){
		$(this).css("color", 'white');
	}
}); 