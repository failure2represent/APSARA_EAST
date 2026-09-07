document.querySelectorAll('.accordion__item').forEach((item) => {
	const title = item.querySelector('.accordion__title');
	const content = item.querySelector('.accordion__content');
	const text = content.querySelector('.accordion__text');

	title.addEventListener('click', () => {
		const isOpen = item.classList.contains('accordion__item--active');

		document.querySelectorAll('.accordion__item').forEach((other) => {
			other.classList.remove('accordion__item--active');
			other.querySelector('.accordion__title').classList.remove('accordion__title--active');
			other.querySelector('.accordion__content').style.height = '0px';
		});

		if (!isOpen) {
			item.classList.add('accordion__item--active');
			title.classList.add('accordion__title--active');
			content.style.height = text.scrollHeight + 'px';
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