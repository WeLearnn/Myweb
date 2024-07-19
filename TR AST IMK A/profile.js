document.querySelector("#open-popup").addEventListener("click",function() {
    document.body.classList.add("active-popup");
    
});

document.querySelector(".popup .tidak").addEventListener("click",function() {
    document.body.classList.remove("active-popup");
    
});