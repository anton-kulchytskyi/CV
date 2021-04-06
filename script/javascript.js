var flkty = new Flickity('.carousel', {
	// draggable: false,
	hash: true,
	wrapAround: true,
	prevNextButtons: false,
	pageDots: false,
	setGallerySize: false,
	// adaptiveHeight: true,
	initialIndex: '.is-initial-select',
});


// typewriter on "About" page

var i = 0;
var txt = 'Hi, my name is Anton and and I am learning to code almost on my own. Now I am looking for my first job as Trainee/Internship Frontend Developer. I believe that everything is just beginning and my career in IT will be filled with bright events and worthy projects.';
var speed = 65;

function typeWriter() {

	if (i < txt.length) {
    	document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

var sign = document.getElementById ('sign');

function signIn() {
	
	setTimeout(() => {
		sign.style.opacity = 1;
	}, 19500);
}

function start() {
	typeWriter ();
	signIn ();
}

function skillAnimation() {
	var divs = document.querySelectorAll('.donut-segment');
	for (var i = 0; i < divs.length; i++) {
    	divs[i].classList.add('donut-segment-animation');
	}
}