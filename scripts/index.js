$(function(){
	$('.projects-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.projects-slider'
	});
	$('.projects-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.projects-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
});
