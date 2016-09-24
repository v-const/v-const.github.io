$(document).ready(function(){
	$("#siteBody-portfolio-secondRow").on("click","img", function (event) {
		
		var thumbArr = $('.thumbnail') // The array of thumbnails
		var index = $('.thumbnail img').index(thumbArr);
		$('#siteBody-portfolio-carousel').carousel(index);
	});
});