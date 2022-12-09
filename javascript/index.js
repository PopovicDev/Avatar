let main_page = document.getElementById('main-page');
let loading_screen = document.getElementById('loading-page');

setTimeout(() => {
	main_page.style.display = 'block';
	loading_screen.style.display = 'none';
}, 8500);

window.onscroll = function(){
	var picture = document.getElementById('katara');
	if(window.pageYOffset > 500){
		picture.classList.add('katara-on');
	}
}