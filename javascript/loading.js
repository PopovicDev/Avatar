let main_page = document.getElementById('main-page');
let loading_screen = document.getElementById('loading-page');
let header_page = document.getElementById('header');

setTimeout(() => {
	main_page.style.display = 'block';
	header_page.style.display = 'flex';
	loading_screen.style.display = 'none';
}, 8300);