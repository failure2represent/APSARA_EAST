//accordion
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

//smth-logo
//url-#cleaner
function cleanUrl() {
	history.replaceState(null, '', window.location.pathname + window.location.search);
}

window.addEventListener('DOMContentLoaded', function () {
	const hash = window.location.hash;
	if (!hash) return;

	const target = document.querySelector(hash);

	if (target) {
		setTimeout(() => {
			target.scrollIntoView({ behavior: 'smooth' });
			cleanUrl();
		}, 100);
	} else {
		cleanUrl();
	}
});

const logo = document.querySelector('.header__logo');

logo?.addEventListener('click', function (e) {
	const isHomePage =
		window.location.pathname.endsWith('/index.html') ||
		window.location.pathname.endsWith('/');

	if (isHomePage) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
		cleanUrl();
	}
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		const target = document.querySelector(href);
		if (!target) return;

		e.preventDefault();
		target.scrollIntoView({ behavior: 'smooth' });
		cleanUrl();
	});
});


//stable hero section
const mediaQuery = window.matchMedia("(max-width: 767px)");

const setHeroHeight = () => {
	const offset = mediaQuery.matches ? 120 : 0;
	document.documentElement.style.setProperty(
		"--hero-height",
		`${window.innerHeight + offset}px`
	);
};

setHeroHeight();

window.addEventListener("orientationchange", () => {
	requestAnimationFrame(setHeroHeight);
});

mediaQuery.addEventListener("change", setHeroHeight);


//supported countries
const countries = [
	"Австралия",
	"Австрия",
	"Азербайджан",
	"Албания",
	"Алжир",
	"Андорра",
	"Ангола",
	"Антигуа и Барбуда",
	"Аргентина",
	"Армения",
	"Афганистан",
	"Багамские Острова",
	"Бангладеш",
	"Барбадос",
	"Бахрейн",
	"Беларусь",
	"Белиз",
	"Бельгия",
	"Бенин",
	"Болгария",
	"Боливия",
	"Босния и Герцеговина",
	"Ботсвана",
	"Бразилия",
	"Бруней",
	"Буркина-Фасо",
	"Бурунди",
	"Бутан",
	"Вануату",
	"Ватикан",
	"Великобритания",
	"Венгрия",
	"Венесуэла",
	"Восточный Тимор",
	"Вьетнам",
	"Габон",
	"Гаити",
	"Гайана",
	"Гамбия",
	"Гана",
	"Гватемала",
	"Гвинея",
	"Гвинея-Бисау",
	"Германия",
	"Гондурас",
	"Гренада",
	"Греция",
	"Грузия",
	"Дания",
	"Джибути",
	"Доминика",
	"Доминиканская Республика",
	"Египет",
	"Замбия",
	"Зимбабве",
	"Израиль",
	"Индия",
	"Индонезия",
	"Иордания",
	"Ирак",
	"Иран",
	"Ирландия",
	"Исландия",
	"Испания",
	"Италия",
	"Йемен",
	"Кабо-Верде",
	"Казахстан",
	"Камбоджа",
	"Камерун",
	"Канада",
	"Катар",
	"Кения",
	"Кипр",
	"Киргизия",
	"Кирибати",
	"Китай",
	"Колумбия",
	"Коморы",
	"Конго",
	"Коста-Рика",
	"Кот-д'Ивуар",
	"Куба",
	"Кувейт",
	"Лаос",
	"Латвия",
	"Лесото",
	"Либерия",
	"Ливан",
	"Ливия",
	"Литва",
	"Лихтенштейн",
	"Люксембург",
	"Маврикий",
	"Мавритания",
	"Мадагаскар",
	"Малави",
	"Малайзия",
	"Мали",
	"Мальдивы",
	"Мальта",
	"Марокко",
	"Маршалловы Острова",
	"Мексика",
	"Микронезия",
	"Мозамбик",
	"Молдова",
	"Монако",
	"Монголия",
	"Мьянма",
	"Намибия",
	"Науру",
	"Непал",
	"Нигер",
	"Нигерия",
	"Нидерланды",
	"Никарагуа",
	"Новая Зеландия",
	"Норвегия",
	"Объединённые Арабские Эмираты",
	"Оман",
	"Пакистан",
	"Палау",
	"Панама",
	"Папуа — Новая Гвинея",
	"Парагвай",
	"Перу",
	"Польша",
	"Португалия",
	"Республика Корея",
	"Россия",
	"Руанда",
	"Румыния",
	"Сальвадор",
	"Самоа",
	"Сан-Марино",
	"Сан-Томе и Принсипи",
	"Саудовская Аравия",
	"Северная Корея",
	"Северная Македония",
	"Сейшельские Острова",
	"Сенегал",
	"Сент-Винсент и Гренадины",
	"Сент-Китс и Невис",
	"Сент-Люсия",
	"Сербия",
	"Сингапур",
	"Сирия",
	"Словакия",
	"Словения",
	"Соломоновы Острова",
	"Сомали",
	"Судан",
	"Суринам",
	"США",
	"Сьерра-Леоне",
	"Таджикистан",
	"Таиланд",
	"Танзания",
	"Того",
	"Тонга",
	"Тринидад и Тобаго",
	"Тувалу",
	"Тунис",
	"Туркменистан",
	"Турция",
	"Уганда",
	"Узбекистан",
	"Украина",
	"Уругвай",
	"Фиджи",
	"Филиппины",
	"Финляндия",
	"Франция",
	"Хорватия",
	"Центральноафриканская Республика",
	"Чад",
	"Черногория",
	"Чехия",
	"Чили",
	"Швейцария",
	"Швеция",
	"Шри-Ланка",
	"Эквадор",
	"Экваториальная Гвинея",
	"Эритрея",
	"Эсватини",
	"Эстония",
	"Эфиопия",
	"Южно-Африканская Республика",
	"Южный Судан",
	"Ямайка",
	"Япония",
];

const datalist = document.getElementById("countries");

countries.forEach((country) => {
	const option = document.createElement("option");
	option.value = country;
	datalist.appendChild(option);
});

//order popup
const popup = document.getElementById('order-popup');
const serviceSelect = document.getElementById('service');

document.querySelectorAll('[data-popup-open]').forEach((btn) => {
	btn.addEventListener('click', () => {
		const service = btn.dataset.service;
		if (service) serviceSelect.value = service;

		closeMenu();
		popup.showModal();
	});
});

popup.querySelector('[data-popup-close]').addEventListener('click', () => popup.close());

popup.addEventListener('click', (e) => {
	if (e.target === popup) popup.close();
});

//lead_id generation
const form = document.getElementById("lead-form");
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxW8uihaUHZ5VKPfLES_iDJYVtjfocyiT62dXReuE6F6M-gIiIBbs244aG2VF5ZbPBuqw/exec";

function makeLeadId() {
	const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
	const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
	return `F-${date}-${rand}`; // F-20260818-A3F9
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	form.lead_id.value = makeLeadId();
	const formData = new FormData(form);

	fetch(SCRIPT_URL, {
		method: "POST",
		mode: "no-cors",
		body: formData,
		keepalive: true,
	}).catch(() => { });

	form.submit();
});