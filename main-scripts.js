




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


//Reduce menu after scrolling past X
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






//Carousel Slider (Main Page)


const sliderBox = document.querySelector('.slider-box');
const sliderImgs = document.querySelectorAll('.wlcm-background');


let counter = 1;
const size = sliderImgs[0].clientWidth;


sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';




//Timer

 let intervalID = window.setInterval(rotate, 5000)

 function rotate(){

 	sliderBox.style.transition = "transform 2000ms ease-in-out";
 	counter++;

 	sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
 	//console.log(counter)
 
};

sliderBox.addEventListener('transitionend', () => {
	console.log(sliderImgs[counter].id);
	if (sliderImgs[counter].id == 'lastClone') {

		sliderBox.style.transition = "none";
		counter = sliderImgs.length - 2;
		sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';

	};
	if (sliderImgs[counter].id == 'firstClone') {

		sliderBox.style.transition = "none";
		counter = sliderImgs.length - counter;
		sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
		stop_slider();
		continue_slider()
	};
	
});


//Stop slider when hovering


function stop_slider(){
	for (var i = 1; i < 99999; i++)
     window.clearInterval(i);
}
function continue_slider(){
	setInterval(rotate, 5000)
}

//Check if page is open
document.addEventListener('visibilitychange', function() {
	if(document.hidden)
		stop_slider();
	else
		continue_slider();
});






