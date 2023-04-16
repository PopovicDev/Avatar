const button = document.getElementById('top');

window.onscroll = function(){
	if(window.pageYOffset > 50){
		button.classList.add("go-top");
	}
	else{
		button.classList.remove("go-top");
	}
}