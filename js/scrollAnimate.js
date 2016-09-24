$(document).ready(function(){
	$("#siteHeaderNavbar").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 800 мс
		$('body,html').animate({scrollTop: top-45}, 800);
	});
});

$(document).ready(function(){
	$("#siteBody-hello").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top-45}, 800);
	});
});

$(document).ready(function(){
	$("#siteBody-aboutMe").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top-45}, 800);
	});
});

$(document).ready(function(){
	$("#siteBody-education").on("click","a[href='#siteBody-experience']", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top-45}, 800);
	});
});

$(document).ready(function(){
	$("#siteBody-experience").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top-45}, 800);
	});
});

$(document).ready(function(){
	$("#siteBody-portfolio").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top-45}, 800);
	});
});

$(document).ready(function(){
	$("#siteFooter").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top-45}, 800);
	});
});