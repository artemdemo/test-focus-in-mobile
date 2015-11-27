(function(){
	'use strict';

	$('.App-SetFocus-HomeInput').on('click', function() {
		$('.App-HomeInput').focus();
	});

	$('.App-Open-SecondPage').on('click', function() {
		$('.SecondPage').html($('#SecondPageTemplate').text());
		$('.SecondPage').removeClass('hidden');
		$('.App-SecondPage-TopInput').focus();
	});

})()