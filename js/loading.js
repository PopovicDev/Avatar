var loader = document.querySelector("#loading-page");
var main_page = document.getElementById('main-page');
var header = document.getElementById('header');

window.addEventListener('load', vanish_and_add);

function vanish_and_add(){
	setTimeout(() => {
		loader.classList.add("disappear");
		main_page.style.display = 'block';
		header.style.display = 'flex';
	}, 5000);

	setTimeout(() => {
		loader.style.display = 'none';
	}, 6500);
}