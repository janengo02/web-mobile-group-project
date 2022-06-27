//Carousel Slider (Main Page)


const sliderBox2 = document.querySelector('.wrap-students');
const sliderImgs2 = document.querySelectorAll('.students-container');

console.log(sliderImgs2);
let counter2 = 1;
const size2 = sliderImgs2[0].clientWidth;


sliderBox2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';



//Timer

 let intervalID2 = window.setInterval(rotate, 5000)

 function rotate(){

 	sliderBox2.style.transition = "transform 2000ms ease-in-out";
 	counter2++;

 	sliderBox2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
 	console.log(counter2)
 
};

sliderBox2.addEventListener('transitionend', () => {
	console.log(sliderImgs2[counter2].id);
	if (sliderImgs2[counter2].id == 'lastClone2') {

		sliderBox2.style.transition = "none";
		counter2 = sliderImgs2.length - 2;
		sliderBox2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

	};
	if (sliderImgs2[counter2].id == 'firstClone2') {

		sliderBox2.style.transition = "none";
		counter2 = sliderImgs2.length - counter2;
		sliderBox2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
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
	setInterval(rotate, 5000);
	setInterval(color_change, 5000);
}

//Check if page is open
document.addEventListener('visibilitychange', function() {
	if(document.hidden)
		stop_slider();
	else
		continue_slider();
});



//Slider Buttons

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
	stop_slider();
	counter2 = 1;
	sliderBox2.style.transition = "transform 2000ms ease-in-out";
	sliderBox2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
	continue_slider();
	color_change()
});
btn2.addEventListener('click', () => {
	stop_slider();
	counter2 = 2;
	sliderBox2.style.transition = "transform 2000ms ease-in-out";
	sliderBox2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
	continue_slider();
	color_change()
});
btn3.addEventListener('click', () => {
	stop_slider();
	counter2 = 3;
	sliderBox2.style.transition = "transform 2000ms ease-in-out";
	sliderBox2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
	continue_slider();
	color_change()
});

//Change colors btn (auto)

function color_change(){
	if (counter2 == 1) {
		btn1.classList.add("this-slide");
		btn2.classList.remove("this-slide");
		btn3.classList.remove("this-slide");
	}
	if (counter2 == 2) {
		btn2.classList.add("this-slide");
		btn1.classList.remove("this-slide");
		btn3.classList.remove("this-slide");
	}
	if (counter2 == 3) {
		btn3.classList.add("this-slide");
		btn2.classList.remove("this-slide");
		btn1.classList.remove("this-slide");
	}
	if (counter2 == 4) {
		btn1.classList.add("this-slide");
		btn2.classList.remove("this-slide");
		btn3.classList.remove("this-slide");
	}
}
setInterval(color_change, 5000);
function start_color_change() {
	// body...
}