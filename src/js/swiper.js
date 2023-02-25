const swiper = new Swiper(".mySwiper", {
	slidesPerView: 2.5,
	slidesPerGroup: 2,
	spaceBetween: 20,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	mousewheel: true,
	keyboard: true,
	breakpoints: {
		576: {
			slidesPerView: 3.5,
			slidesPerGroup: 3,
		},
		768: {
			slidesPerView: 4.5,
			slidesPerGroup: 4,
		},
	},
});
