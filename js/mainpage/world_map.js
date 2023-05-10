let picture = document.getElementById('picture');
let textz = picture.closest("#world-map-map").querySelectorAll('[data-texts]');
let texts = [...textz];
function Picture(value){
    picture.src = "./pictures/world_map/" + value;
}
function Territory(textnum, value){
    parseInt(textnum);
    for(i in texts){
        texts[i].style.display = 'none';
    }
    picture.src="./pictures/world_map/default-world-map.webp";
    texts[textnum].style.display = 'block';
    Picture(value);
}
window.addEventListener('mouseup', (e) => {
    if(!picture.contains(e.target)){
        for(let i = 0; i < texts.length; i++){
            texts[i].style.display = 'none';
        }
        picture.src="./pictures/world_map/default-world-map.webp";
    }
});