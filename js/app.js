console.log('test');

$(document).ready(function(){
	$('.emailform').hide()

	$('#button1').click(function() {
		$('.emailform').show();
		console.log('HELLO');
	});
});