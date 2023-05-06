var loader = document.querySelector("#loading-page");
var header = document.getElementById('header');
var main_page = document.getElementById('main-page');

window.addEventListener('load', vanish_and_add);

function vanish_and_add(){
	setTimeout(() => {
		loader.classList.add("disappear");
		header.style.display = 'flex';
		main_page.style.display = 'flex';
	}, 2000);

	setTimeout(() => {
		loader.style.display = 'none';
	}, 2500);
}