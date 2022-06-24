




//Interactive Menu

let height = document.querySelector(".header");
let shade = document.querySelector(".h-shade");
let title = document.querySelector(".title");
let menu_items = document.querySelector(".menu-container");
let scoll_past = document.querySelector('.wlcm-container');

console.log(height);

window.onscroll = function(){
    //TOP
    if(window.scrollY > 835){
        console.log("TRIGGER: top of div reached.");
        height.classList.add("upd-height");
        shade.classList.add("upd-shade");
        title.classList.add("upd_title");
        menu_items.classList.add("upd_items");
    }
    if(window.scrollY < 835){
        console.log("TRIGGER: top of div reached.");
        height.classList.remove("upd-height");
        shade.classList.remove("upd-shade");
        title.classList.remove("upd_title");
        menu_items.classList.remove("upd_items");
    }
}