const tbtn = document.querySelector(".btn")
const main = document.querySelector(".box");

tbtn.addEventListener('click',()=>{
    if(main.classList.contains('dark')){
     main.classList.remove('dark')
    main.classList.add('light')
    tbtn.textContent ='Dark-Theme'
    
    }
    else{
    main.classList.remove('light')
    main.classList.add('dark')
    tbtn.textContent ='Light-Theme'
    }

})