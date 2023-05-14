let inputBox = document.getElementById('search-bar');
let searchh = document.querySelector(".button");
let cancel = document.querySelector(".fa-x");
let inputt = document.getElementById('input');

searchh.addEventListener("click", () => {
    inputBox.classList.add("opened");
    inputt.classList.add("opened");
    cancel.style.display = 'block';
});

cancel.addEventListener("click", () => {
    inputt.classList.remove("opened");
    inputBox.classList.remove("opened");
    cancel.style.display = 'none';
});

function search(){
    let input = document.getElementById('input');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('search-list');
    let li = ul.getElementsByTagName('li');
    let bar = document.getElementById('search-bar');
    let value = input.value.trim();
    if(value.length == 0){
        for(i = 0;i < li.length; i++){
            li[i].style.display = 'block';
        }
    }
    if(value.length != 0){
        bar.style.height = 'auto';
    }
    else{
        bar.style.height ='500px';
    }

    for(i = 0;i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        let txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = 'block';
        }
        else{
            li[i].style.display = 'none';
        }
    }
}

let ull = document.getElementById('search-list');
let lii = ull.getElementsByTagName('li');
let bar = document.getElementById('search-bar');

window.addEventListener('click', () => {
    if(input !== document.activeElement){
        for(i = 0;i < lii.length; i++){
            lii[i].style.display = 'none';
        }
        bar.style.height = 'auto';
    }
    else{
        search();
    }
})
