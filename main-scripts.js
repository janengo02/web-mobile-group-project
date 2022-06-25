




//Interactive Menu

let height = document.querySelector(".header");
let shade = document.querySelector(".h-shade");
let title = document.querySelector(".title");
let menu_items = document.querySelector(".menu-container");
let scoll_past = document.querySelector('.wlcm-container');


function add_shade() {
	height.classList.add("upd-height");
    shade.classList.add("upd-shade");
    title.classList.add("upd_title");
    menu_items.classList.add("upd_items");
}
function remove_shade() {
	height.classList.remove("upd-height");
    shade.classList.remove("upd-shade");
    title.classList.remove("upd_title");
    menu_items.classList.remove("upd_items");
}

window.onscroll = function(){

    if(window.scrollY > 780){
        add_shade();
    }
    if(window.scrollY < 780){
        remove_shade();
    }
}

function hovered() {
    shade.classList.toggle("upd-shade");
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

function closeForm() {
document.getElementById("myForm").style.display = "none";
}