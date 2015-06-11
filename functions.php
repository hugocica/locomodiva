<?php
	$action = $_POST['action'];
	
	if ($action == 'load_content') {
		load_content();
	}
	
	function load_content() {
		echo 'vish';
		return true;
		die();
	}
?>