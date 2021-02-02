var flkty = new Flickity('.carousel', {
	// draggable: false,
	hash: true,
	wrapAround: true,
	prevNextButtons: false,
	pageDots: false,
	setGallerySize: false,
});


// typewriter on "About" page

var i = 0;
var txt = 'Hi, my name is Anton and I am 40. I have few experience of writing code, limited to elementary courses. This may speak against me, but I believe that everything is just beginning and my career in IT will be filled with bright events and worthy projects.';
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
	}, 18500);
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

// var socialOn = document.getElementById("social-small");
// var social = document.getElementById("social-large");

// socialOn.onclick = function() {
//     social.style.display = 'block';
// };

// window.onclick = function(event) {
//     if (event.target == social) {
//         social.style.display = 'none';
//     }
// };

// function socialOn() {
// 	var x = document.getElementById("social-large");
// 	if (x.style.display === "none") {
// 		x.style.display = "block";
// 	}
// 	else {
// 		x.style.display = "none";
// 	}
// }



// function showHide(hide1, hide2, hide3) {
//     if (document.getElementById(hide1, hide2, hide3)) { 
//         var obj = document.getElementById(hide1, hide2, hide3); 
//         if (obj.style.display != "block") { 
//             obj.style.display = "block"; 
//         }
//         else obj.style.display = "none"; 
//     }     
// }