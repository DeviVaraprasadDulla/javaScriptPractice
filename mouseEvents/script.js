const cont = document.querySelector(".container")

cont.addEventListener("mouseenter",function(){
    cont.style.backgroundColor = "red";
})
cont.addEventListener("mouseleave",function(){
    cont.style.backgroundColor = "yellow";
})