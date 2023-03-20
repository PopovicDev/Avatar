let picture = document.getElementById('picture');
let texts = [
    document.getElementById('AirOne'),
    document.getElementById('AirTwo'),
    document.getElementById('AirThree'),
    document.getElementById('WaterOne'),
    document.getElementById('WaterTwo'),
    document.getElementById('Earth'),
    document.getElementById('Fire')
]
let checks = [
    document.getElementById('check1'),
    document.getElementById('check2'),
    document.getElementById('check3'),
    document.getElementById('check4'),
    document.getElementById('check5'),
    document.getElementById('check6'),
    document.getElementById('check7'),
    document.getElementById('check8'),
    document.getElementById('check9')
]
function Vazduh1(){
    picture.src="./pictures/world_map/air1-world-map.webp";
}
function Vazduh2(){
    picture.src="./pictures/world_map/air2-world-map.webp";
}
function Vazduh3(){
    picture.src="./pictures/world_map/air3-world-map.webp";
}
function Water1(){
    picture.src="./pictures/world_map/water1-world-map.webp";
}
function Water2(){
    picture.src="./pictures/world_map/water2-world-map.webp";
}
function Earth(){
    picture.src="./pictures/world_map/earth-world-map.webp";
}
function Fire(){
    picture.src="./pictures/world_map/fire-world-map.webp";
}
function Default(){
    picture.src="./pictures/world_map/default-world-map.webp";
}
window.addEventListener('click', function(e){
    switch(true){
        case (checks[0].contains(e.target) || texts[0].contains(e.target)):
            texts[0].style.display = 'block';
            Vazduh1();
            break;
        case (checks[1].contains(e.target) || texts[1].contains(e.target)):
            texts[1].style.display = 'block';
            Vazduh2();
            break;
        case (checks[2].contains(e.target) || texts[2].contains(e.target)):
            texts[2].style.display = 'block';
            Vazduh3();
            break;
        case (checks[3].contains(e.target) || texts[3].contains(e.target)):
            texts[3].style.display = 'block';
            Water1();
            break;
        case (checks[4].contains(e.target) || texts[4].contains(e.target)):
            texts[4].style.display = 'block';
            Water2();
            break;
        case (checks[5].contains(e.target) || checks[6].contains(e.target) || checks[7].contains(e.target) || texts[5].contains(e.target)):
            texts[5].style.display = 'block';
            Earth();
            break;
        case (checks[8].contains(e.target) || texts[6].contains(e.target)):
            texts[6].style.display = 'block';
            Fire();
            break;
        default:
            for(let i = 0; i < texts.length; i++){
                texts[i].style.display = 'none';
            }
            picture.src="./pictures/world_map/default-world-map.webp";
            break;
    }
});