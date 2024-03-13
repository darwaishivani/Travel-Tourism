const loader = document.querySelector(".p-loader");
const container = document.querySelector(".container");

setTimeout(function () {
	loader.style.display = "none";
	container.style.display = "initial";
}, 1000);

// swiper
var swiper = new Swiper(".mySwipercard ", {
	slidesPerView: 1,
	spaceBetween: 10,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});

var swiper = new Swiper(".mySwipertest", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
