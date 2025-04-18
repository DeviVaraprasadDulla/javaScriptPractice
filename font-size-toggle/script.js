const incre = document.querySelector(".inc")
const decre = document.querySelector(".dec")
const con =  document.querySelector(".cont")

let temp = 16
// con.style.fontSize = 16+"px";
decre.addEventListener('click',()=>{
    if(temp>10 && temp<=50){
        temp = temp-2
        con.style.fontSize = temp+"px";
    }
})

incre.addEventListener('click',()=>{
    if(temp>=10 && temp<50){
        temp = temp+2
        con.style.fontSize = temp+"px";
    }

})