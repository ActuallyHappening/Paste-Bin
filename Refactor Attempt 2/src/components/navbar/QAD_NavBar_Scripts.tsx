function QAD_DO() {
  const menu = document.querySelector('.dropdown-menu');
  console.log(`menu =`);
  console.log(menu)

let isMenuActive = menu.classList.contains('is-active');


document.addEventListener('click', handleClick);


function toggleMenu(target) {
	target.classList.toggle('is-active', isMenuActive)
	menu.classList.toggle('is-active', isMenuActive);
  console.log("toggling menu ...")
}


function handleClick(event) {
	if (event.metaKey || event.ctrlKey) return;
	let target = event.target.closest('.menu-toggle');
	if (!target) return;
	isMenuActive = !isMenuActive;
  console.log(`Setting menu active state to ${isMenuActive}`)
	toggleMenu(target);
}
}

export default QAD_DO