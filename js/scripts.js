document.querySelectorAll('.accordion__item').forEach((item) => {
	const content = item.querySelector('.accordion__content');

	item.addEventListener('click', (e) => {
		if (e.target.closest('.accordion__content')) return;

		const isOpen = item.classList.contains('accordion__item--active');

		document.querySelectorAll('.accordion__item').forEach((other) => {
			other.classList.remove('accordion__item--active');
			other.querySelector('.accordion__content').style.height = '0px';
		});

		if (!isOpen) {
			item.classList.add('accordion__item--active');
			content.style.height = content.scrollHeight + 'px';
		}
	});
});


//burger-menu
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.header__overlay');

function toggleMenu() {
	burger.classList.toggle('active');
	nav.classList.toggle('active');
	overlay.classList.toggle('active');
}

function closeMenu() {
	burger.classList.remove('active');
	nav.classList.remove('active');
	overlay.classList.remove('active');
}

//smooth logo
const logo = document.querySelector('.header__logo');

logo?.addEventListener('click', function (e) {
	const isHomePage =
		window.location.pathname.endsWith('/index.html') ||
		window.location.pathname.endsWith('/');

	if (isHomePage) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
});