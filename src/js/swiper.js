$(document).ready(function(){
		//Swiper autoplay
	var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        centeredSlides: true,
	        autoplay: 5000,
	        autoplayDisableOnInteraction: false
	});
});