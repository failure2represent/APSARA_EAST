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