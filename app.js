const header = document.querySelector('header')
const hero = document.querySelector(".section-hero")

document.addEventListener("scroll",()=>{
    if(window.scrollY >= hero.clientHeight){
        header.classList.add("background")
    }else{
        header.classList.remove("background")
    }
})