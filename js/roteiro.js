$(document).ready(function() {
	if (current_page == undefined) {
		current_page = 'inicial';
		jQuery('#'+current_page).addClass('active');
		loadContent(current_page);
	}
	
	removeObject();

	$('#header > tbody > tr > td:nth-child(2) > ul > li > a').click(function() {
		current_page = $(this).parent().attr('id');
		jQuery('#header > tbody > tr > td:nth-child(2) > ul > li.active').removeClass('active');
		jQuery('#'+current_page).addClass('active');
		loadContent(current_page);
	});
});

function loadContent($page) {
	var params = 'action=load_content';
	var height = $(window).height() / 2;
	params += '&page=' + $page;
	var pageUrl = $page + '.php'; 
	$.ajax({
		url: pageUrl,
		type: 'POST',
		dataType: 'html',
		beforeSend: function() {
			$('.master-wrapper').html('<img src="images/371.GIF" style="position:absolute;top:calc(90% - '+height+'px);left:calc(50% - 60px)">');
		},
		success: function(response) {
			$('.master-wrapper').html(response).fadeIn(300);
		}
	});
}

function removeObject() {
		setTimeout(function() {
			if ($('object').attr('type', 'application/gas-events-bb').length > 0)
				$('object').attr('type', 'application/gas-events-bb').remove();
			else 
				removeObject();
		}, 500);
	}