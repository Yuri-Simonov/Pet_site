//Menu burger=======================================================================
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let body = document.querySelector('body');
headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
})



//Slider=======================================================================
let slider1 = document.querySelector('.news-more__images');
let slider2 = document.querySelector('.porfolio__images');
if (slider1) {
	new Swiper('.news-more__images', {
		//точки
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
}
if (slider2) {
	new Swiper('.porfolio__images', {
		//точки
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		//стрелки
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
}

//Home=======================================================================
let footer = document.querySelector('.footer');
let home = document.querySelector('.home');

if (home) {
	footer.style.paddingTop = 0 + 'px';
	footer.style.marginTop = -102 + 'px';
	if (document.documentElement.clientWidth > 1279) {
		footer.style.marginTop = 0 + 'px';
	}
}