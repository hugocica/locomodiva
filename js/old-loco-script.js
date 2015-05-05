(function(jQuery){
function initFlyouts(){initPublishedFlyoutMenus([{"id":"386327531541911358","title":"P&aacute;gina Inicial","url":"index.php","target":""},{"id":"542910479491953574","title":"Sobre","url":"sobre.php","target":""},{"id":"551092415317521023","title":"Projetos","url":"projetos.php","target":""},{"id":"112332591502695733","title":"Contato","url":"contato.php","target":""},{"id":"693013066733283107","title":"Blog","url":"http:\/\/locomotivajr.wordpress.com","target":"_blank"}],"386327531541911358","<li><a href=\"#\" data-membership-required=\"\" >{{title}}<\/a><\/li>",'active',false)}
if (jQuery) {
jQuery(document).ready(function() { jQuery(initFlyouts); });
}else{
if (Prototype.Browser.IE) window.onload = initFlyouts;
else document.observe('dom:loaded', initFlyouts);
}
})(window._W && _W.jQuery)

(function(jQuery){
		function initFlyouts(){
			initPublishedFlyoutMenus(
				[{"id":"386327531541911358","title":"P&aacute;gina Inicial","url":"index.php","target":""},{"id":"542910479491953574","title":"Sobre","url":"sobre.php","target":""},{"id":"551092415317521023","title":"Projetos","url":"projetos.php","target":""},{"id":"112332591502695733","title":"Contato","url":"contato.php","target":""},{"id":"693013066733283107","title":"Blog","url":"http:\/\/locomotivajr.wordpress.com","target":"_blank"}],
				"551092415317521023",
				"<li class=\"wsite-menu-item-wrap\"><a href=\"#\" data-membership-required=\"\" class=\"wsite-menu-item\">{{title}}<\/a><\/li>",
				'active',
				false,
				{"site\/menu\/submenu-main":"<div class=\"wsite-menu-wrap\" style=\"display:none\">{{! Designer note: \"wsite-menu-wrap\" required on submenu wrapper }}\n\t<ul class=\"wsite-menu\">{{! Designer note: \"wsite-menu\" required on submenu element }}\n\t\t{{#children}}{{> site\/menu\/submenu-item}}{{\/children}}\n\t<\/ul>\n<\/div>\n","site\/menu\/submenu-item":"<li{{#id}} id=\"{{id}}\"{{\/id}} class=\"wsite-menu-subitem-wrap{{#current_page}} wsite-nav-current{{\/current_page}}\">{{! Designer note: id required & \"wsite-menu-subitem-wrap\" required on the item wrap }}\n\t<a href=\"{{itemlink}}\"{{#target}} target=\"{{target}}\"{{\/target}} class=\"wsite-menu-subitem\">{{! Designer note: \"wsite-menu-subitem\" required on the item link }}\n\t\t<span class=\"wsite-menu-title\">\n\t\t\t{{{itemtitle}}}\n\t\t<\/span>{{#has_children}}<span class=\"wsite-menu-arrow\">&gt;<\/span>{{\/has_children}}\n\t<\/a>\n\t{{#has_children}}{{> site\/menu\/submenu-main}}{{\/has_children}}\n<\/li>\n","site\/menu\/main":"<ul class=\"wsite-menu-default\">{{> site\/menu\/main-without-wrap}}<\/ul>{{! Designer note: \"wsite-menu-default\" required on menu element }}\n","site\/menu\/main-without-wrap":"{{#links}}{{!\n}}{{#current_page}}{{> site\/menu\/item-current}}{{\/current_page}}{{!\n}}{{^current_page}}{{> site\/menu\/item}}{{\/current_page}}{{!\n}}{{\/links}}\n","site\/menu\/item-current":"<li{{#id}} id=\"{{id}}\"{{\/id}} class=\"wsite-menu-item-wrap\">{{! Designer note: id required & \"wsite-menu-item-wrap\" required on the item wrapper }}\n\t<a href=\"{{itemlink}}\"{{#target}} target=\"{{target}}\"{{\/target}} class=\"wsite-menu-item\">{{! Designer note: \"wsite-menu-item\" required on the item link }}\n\t\t{{{itemtitle}}}\n\t<\/a>\n\t{{#has_children}}{{> site\/menu\/submenu-main}}{{\/has_children}}\n<\/li>\n","site\/menu\/item":"<li{{#id}} id=\"{{id}}\"{{\/id}} class=\"wsite-menu-item-wrap\">{{! Designer note: id required & \"wsite-menu-item-wrap\" required on the item wrapper }}\n\t<a href=\"{{itemlink}}\" data-membership-required=\"{{membership-required}}\"{{#target}} target=\"{{target}}\"{{\/target}} class=\"wsite-menu-item\">{{! Designer note: \"wsite-menu-item\" required on the item link }}\n\t\t{{{itemtitle}}}\n\t<\/a>\n\t{{#has_children}}{{> site\/menu\/submenu-main}}{{\/has_children}}\n<\/li>\n"}
			)
		}
		if (jQuery) {
			jQuery(document).ready(function() { jQuery(initFlyouts); });
		}else{
			if (Prototype.Browser.IE) window.onload = initFlyouts;
			else document.observe('dom:loaded', initFlyouts);
		}
	})(window._W && _W.jQuery)
	
	(function(jQuery){
		function initFlyouts(){
			initPublishedFlyoutMenus(
				[{"id":"386327531541911358","title":"P&aacute; Inicial","url":"index.php","target":""},{"id":"542910479491953574",""sobre.php","target":""},{"id":"551092415317521023","title":"Projetos","url":"projetos.php","target":""},{"id":"112332591502695733","title":"Contato","url":"contato.php","target":""},{"id":"693013066733283107","title":"Blog","url":"http:\/\/locomotivajr.wordpress.com","target":"_blank"}],
				"542910479491953574",
				"<li class=\"wsite-menu-item-wrap\"><a href=\"#\" data-membership-required=\"\" class=\"wsite-menu-item\">{{title}}<\/a><\/li>",
				'active',
				false,
				{"site\/menu\/submenu-main":"<div class=\"wsite-menu-wrap\" style=\"display:none\">{{! Designer note: \"wsite-menu-wrap\" required on submenu wrapper }}\n\t<ul class=\"wsite-menu\">{{! Designer note: \"wsite-menu\" required on submenu element }}\n\t\t{{#children}}{{> site\/menu\/submenu-item}}{{\/children}}\n\t<\/ul>\n<\/div>\n","site\/menu\/submenu-item":"<li{{#id}} id=\"{{id}}\"{{\/id}} class=\"wsite-menu-subitem-wrap{{#current_page}} wsite-nav-current{{\/current_page}}\">{{! Designer note: id required & \"wsite-menu-subitem-wrap\" required on the item wrap }}\n\t<a href=\"{{itemlink}}\"{{#target}} target=\"{{target}}\"{{\/target}} class=\"wsite-menu-subitem\">{{! Designer note: \"wsite-menu-subitem\" required on the item link }}\n\t\t<span class=\"wsite-menu-title\">\n\t\t\t{{{itemtitle}}}\n\t\t<\/span>{{#has_children}}<span class=\"wsite-menu-arrow\">&gt;<\/span>{{\/has_children}}\n\t<\/a>\n\t{{#has_children}}{{> site\/menu\/submenu-main}}{{\/has_children}}\n<\/li>\n","site\/menu\/main":"<ul class=\"wsite-menu-default\">{{> site\/menu\/main-without-wrap}}<\/ul>{{! Designer note: \"wsite-menu-default\" required on menu element }}\n","site\/menu\/main-without-wrap":"{{#links}}{{!\n}}{{#current_page}}{{> site\/menu\/item-current}}{{\/current_page}}{{!\n}}{{^current_page}}{{> site\/menu\/item}}{{\/current_page}}{{!\n}}{{\/links}}\n","site\/menu\/item-current":"<li{{#id}} id=\"{{id}}\"{{\/id}} class=\"wsite-menu-item-wrap\">{{! Designer note: id required & \"wsite-menu-item-wrap\" required on the item wrapper }}\n\t<a href=\"{{itemlink}}\"{{#target}} target=\"{{target}}\"{{\/target}} class=\"wsite-menu-item\">{{! Designer note: \"wsite-menu-item\" required on the item link }}\n\t\t{{{itemtitle}}}\n\t<\/a>\n\t{{#has_children}}{{> site\/menu\/submenu-main}}{{\/has_children}}\n<\/li>\n","site\/menu\/item":"<li{{#id}} id=\"{{id}}\"{{\/id}} class=\"wsite-menu-item-wrap\">{{! Designer note: id required & \"wsite-menu-item-wrap\" required on the item wrapper }}\n\t<a href=\"{{itemlink}}\" data-membership-required=\"{{membership-required}}\"{{#target}} target=\"{{target}}\"{{\/target}} class=\"wsite-menu-item\">{{! Designer note: \"wsite-menu-item\" required on the item link }}\n\t\t{{{itemtitle}}}\n\t<\/a>\n\t{{#has_children}}{{> site\/menu\/submenu-main}}{{\/has_children}}\n<\/li>\n"}
			)
		}
		if (jQuery) {
			jQuery(document).ready(function() { jQuery(initFlyouts); });
		}else{
			if (Prototype.Browser.IE) window.onload = initFlyouts;
			else document.observe('dom:loaded', initFlyouts);
		}
	})(window._W && _W.jQuery)