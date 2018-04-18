<?php
header("Content-type: text/plain");
// URL grabber
if(isset($_GET['url'])){
	$url = $_GET['url'];

	if (filter_var($url, FILTER_VALIDATE_URL)) {
	$file = pathinfo($url);
	if($file['extension'] == "php") {
		die("ERROR 403: php files are FORBIDDEN.");
	} else {
		echo file_get_contents($url);
	}
	//echo file_get_contents($url);
	} else {
		die("Error 403: Not a real url OR not allowed to load local files.");
	}
} else {
	echo '404';
}




?>