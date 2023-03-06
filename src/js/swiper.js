const swiper = new Swiper(".mySwiper", {
	slidesPerView: 2.5,
	slidesPerGroup: 2,
	spaceBetween: 20,
	// loop: true,
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
			slidesPerView: 4.5,
			slidesPerGroup: 4,
		},
		768: {
			slidesPerView: 5.5,
			slidesPerGroup: 5,
		},
		992: {
			slidesPerView: 6.5,
			slidesPerGroup: 6,
		},
	},
});


const swiperSport = new Swiper(".mySwiper__sport", {
	slidesPerView: 1.5,
	slidesPerGroup: 1,
	spaceBetween: 20,
	// loop: true,
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
			slidesPerView: 2.5,
			slidesPerGroup: 2,
		},
		768: {
			slidesPerView: 3.5,
			slidesPerGroup: 3,
		},
		992: {
			slidesPerView: 3.5,
			slidesPerGroup: 3,
		},
	},
});
