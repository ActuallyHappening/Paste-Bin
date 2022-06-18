function QAD_DO() {
  const menu = document.querySelector('.dropdown-menu');


let isMenuActive = menu.classList.contains('is-active');


document.addEventListener('click', handleClick);


function toggleMenu(target) {
	target.classList.toggle('is-active', isMenuActive)
	menu.classList.toggle('is-active', isMenuActive);
}


function handleClick(event) {
	if (event.metaKey || event.ctrlKey) return;
	let target = event.target.closest('.menu-toggle');
	if (!target) return;
	isMenuActive = !isMenuActive;
	toggleMenu(target);
}
}

export default QAD_DO