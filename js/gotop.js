window.onscroll = function(){
	var button = document.getElementById('top');
	if(window.pageYOffset > 50){
		button.classList.add("go-top");
	}
	else{
		button.classList.remove("go-top");
	}
}