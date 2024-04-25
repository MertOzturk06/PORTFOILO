const hamburger=document.querySelector(".fa-bars")
const menu=document.querySelector(".navbar")

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("active")
})


let scroll_1=()=>{
    const scroll_1=document.querySelector("#ana-4")


    scroll_1.scrollIntoView({behavior:"smooth"})
}

document.querySelector("#three").addEventListener("click",scroll_1)


let scroll_2=()=>{
    const scroll_2=document.querySelector("#ana-3")
    scroll_2.scrollIntoView({behavior:"smooth"})
}

document.querySelector("#two").addEventListener("click",scroll_2)


let scroll_3=()=>{
    const scroll_3=document.querySelector("#ana-2")

    scroll_3.scrollIntoView({behavior:"smooth"})
}

document.querySelector("#one").addEventListener("click",scroll_3)




