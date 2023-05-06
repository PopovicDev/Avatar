var picker = document.getElementById('choose');
var div1 = document.getElementById('choose-nw');
var div2 = document.getElementById('choose-sw');
var hr = document.getElementById('choose-line');
var div1_text = document.getElementById('choose-nw-text');
var div2_text = document.getElementById('choose-sw-text');
var upper = document.getElementById('upper');
var lower = document.getElementById('lower');
var header = document.getElementById('header');
var topbutton = document.getElementById('top');

function North(){
    div2.style.display = 'none';
    hr.style.display = 'none';
    div1.style.flexBasis = "100%";
    div1_text.classList.add("disappear");
    setTimeout(() => {
		  div1_text.style.display = 'none';
      div1.classList.add("disappear");
      div1.style.display = 'none';
      div1.style.display = 'none';
      header.style.display = 'flex';
      upper.style.display = 'flex';
      picker.style.display = 'none';
      topbutton.style.display = 'block';
	}, 1000);
}

function South(){
    div1.style.display = 'none';
    hr.style.display = 'none';
    div2.style.flexBasis = "100%";
    div2_text.classList.add("disappear");
    setTimeout(() => {
		  div2_text.style.display = 'none';
      div2.classList.add("disappear");
      div2.style.display = 'none';
      header.style.display = 'flex';
      lower.style.display = 'flex';
      picker.style.display = 'none';
      topbutton.style.display = 'block';
	}, 1000);
}