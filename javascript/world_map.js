var picture = document.getElementById('picture');
var air1 = document.getElementById('position1-air');
var air2 = document.getElementById('position2-air');
var air3 = document.getElementById('position3-air');
var water1 = document.getElementById('position4-water');
var water2 = document.getElementById('position5-water');
var earth1 = document.getElementById('position6-earth1');
var earth2 = document.getElementById('position6-earth2');
var earth3 = document.getElementById('position6-earth3');
var fire = document.getElementById('position7-fire');
const air_one = document.getElementById('AirOne');
const air_two = document.getElementById('AirTwo');
const air_three = document.getElementById('AirThree');
const water_one = document.getElementById('WaterOne');
const water_two = document.getElementById('WaterTwo');
const earth = document.getElementById('Earth');
const fire_one = document.getElementById('Fire');
const checkone = document.getElementById('check1');
const checktwo = document.getElementById('check2');
const checkthree = document.getElementById('check3');
const checkfour = document.getElementById('check4');
const checkfive = document.getElementById('check5');
const checksix = document.getElementById('check6');
const checkseven = document.getElementById('check7');
const checkeight = document.getElementById('check8');
const checknine = document.getElementById('check9');

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

window.addEventListener('click', function(e){
    if(checkone.contains(e.target) || air_one.contains(e.target)){
        air_one.style.display = 'block';
        picture.src="./pictures/world_map/air1-world-map.webp";
    }
    else{
        air_one.style.display = 'none';
        picture.src="./pictures/world_map/default-world-map.webp";
    }
    if(checktwo.contains(e.target) || air_two.contains(e.target)){
        air_two.style.display = 'block';
        picture.src="./pictures/world_map/air2-world-map.webp";
    }
    else{
        air_two.style.display = 'none';
        picture.src="./pictures/world_map/default-world-map.webp";
    }
    if(checkthree.contains(e.target) || air_three.contains(e.target)){
        air_three.style.display = 'block';
        picture.src="./pictures/world_map/air3-world-map.webp";
    }
    else{
        air_three.style.display = 'none';
        picture.src="./pictures/world_map/default-world-map.webp";
    }
    if(checkfour.contains(e.target) || water_one.contains(e.target)){
        water_one.style.display = 'block';
        picture.src="./pictures/world_map/water1-world-map.webp";
    }
    else{
        water_one.style.display = 'none';
        picture.src="./pictures/world_map/default-world-map.webp";
    }
    if(checkfive.contains(e.target) || water_two.contains(e.target)){
        water_two.style.display = 'block';
        picture.src="./pictures/world_map/water2-world-map.webp";
    }
    else{
        water_two.style.display = 'none';
        picture.src="./pictures/world_map/default-world-map.webp";
    }
    if(checksix.contains(e.target) || checkseven.contains(e.target) || checkeight.contains(e.target) || earth.contains(e.target)){
        earth.style.display = 'block';
        picture.src="./pictures/world_map/earth-world-map.webp";
    }
    else{
        earth.style.display = 'none';
        picture.src="./pictures/world_map/default-world-map.webp";
    }
    if(checknine.contains(e.target) || fire_one.contains(e.target)){
        fire_one.style.display = 'block';
        picture.src="./pictures/world_map/fire-world-map.webp";
    }
    else{
        fire_one.style.display = 'none';
        picture.src="./pictures/world_map/default-world-map.webp";
    }
});