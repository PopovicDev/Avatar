let main_page = document.getElementById('page');
let loading_screen = document.getElementById('loading-page');

setTimeout(() => {
	main_page.style.display = 'block';
	loading_screen.style.display = 'none';
}, 11000);