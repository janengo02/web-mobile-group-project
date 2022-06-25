




//Interactive Menu

let height = document.querySelector(".header");
let shade = document.querySelector(".h-shade");
let title = document.querySelector(".title");
let menu_items = document.querySelector(".menu-container");
let scoll_past = document.querySelector('.wlcm-container');


function small_menu() {
	height.classList.add("upd-height");
    shade.classList.add("upd-shade");
    title.classList.add("upd_title");
    menu_items.classList.add("upd_items");
}
function big_menu() {
	height.classList.remove("upd-height");
    shade.classList.remove("upd-shade");
    title.classList.remove("upd_title");
    menu_items.classList.remove("upd_items");
}

window.onscroll = function(){

    if(window.scrollY > 780){
        small_menu();
    }
    if(window.scrollY < 780){
        big_menu();
    }
}

function add_shade() {
    shade.classList.add("upd-shade");
}
function remove_shade() {
	if(window.scrollY < 780){
        shade.classList.remove("upd-shade");
    }
    
}
