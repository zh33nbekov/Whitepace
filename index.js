const $ = document
const buttonBurger = $.querySelector('.button--burger')
const headerMenu = $.querySelector('.header__menu')
buttonBurger.addEventListener('click', () => {
	headerMenu.classList.add('active')
})
