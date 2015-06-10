$(document).ready(function() {
	if (current_page == undefined) {
		current_page = 'inicial';
		jQuery('#'+current_page).addClass('active');
	}

	$('#header > tbody > tr > td:nth-child(2) > ul > li > a').click(function() {
		current_page = $(this).parent().attr('id');
		jQuery('#header > tbody > tr > td:nth-child(2) > ul > li.active').removeClass('active');
		jQuery('#'+current_page).addClass('active');
	});
});