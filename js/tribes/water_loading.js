var loader = document.querySelector("#loading-page");
var hr = document.getElementById('choose-line');

window.addEventListener('load', vanish_and_add);

function vanish_and_add(){
	setTimeout(() => {
		loader.classList.add("disappear");
	}, 2000);

	setTimeout(() => {
		loader.style.display = 'none';
	}, 2500);

	setTimeout(() => {
		hr.style.display = 'block';
	}, 2700);
}