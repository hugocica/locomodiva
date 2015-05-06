$(document).ready(function() {
	$('#header > tbody > tr > td:nth-child(2) > ul > li > a').click(function() {
		console.log($(this).html());
	});
});