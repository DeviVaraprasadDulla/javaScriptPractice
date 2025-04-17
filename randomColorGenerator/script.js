const btn = document.querySelector(".btn")
const bg = document.querySelector(".parent")

btn.addEventListener('click',function(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const radomColorBorder = '#' + Math.floor(Math.random() * 16777215).toString(16);

    bg.style.backgroundColor =randomColor;
    bg.style.borderColor = radomColorBorder;
})