var loader=document.querySelector("#loading-page"),hr=document.getElementById("choose-line");function vanish_and_add(){setTimeout(()=>{loader.classList.add("disappear")},2e3),setTimeout(()=>{loader.style.display="none"},2500),setTimeout(()=>{hr.style.display="block"},2700)}window.addEventListener("load",vanish_and_add);