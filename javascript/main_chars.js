const panels = document.querySelectorAll(".character");
 
function DeleteAll() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}

window.addEventListener('click', function(e){
    if(document.getElementById('main-characters').contains(e.target)){
        panels.forEach(panel => {
            panel.addEventListener("click", function() {
                DeleteAll();
                panel.classList.add("active");
            })
        })
    }
    else{
        DeleteAll();
    }
})