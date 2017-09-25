/*
File: JavaScript file for Ryerson Hobby Computer Club website
Author: Kowsheek Mahmood (http://www.ee.ryerson.ca/~k3mahmoo/)
Version: 1.0
Purpose: To make the pages sexy!
*/
$(document).ready(function() {
	$(".iframe").fancybox({
		'padding':10,
		'frameWidth':(screen.width * 0.70),
		'frameHeight':(screen.height * 0.5),
		'zoomOpacity':true,
		'zoomSpeedIn':600,
		'zoomSpeedOut':300,
		'zoomSpeedChange':100,
		'hideOnContentClick':true		
	}); 
});


