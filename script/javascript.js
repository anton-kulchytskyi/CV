// Tab (slide) in navigation

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  	showSlides(slideIndex = n);
}

function showSlides(n) {
  	var slides = document.getElementsByClassName("mySlides");
  	var dots = document.getElementsByClassName("dot");
  	if (n > slides.length) {slideIndex = 1}    
  	if (n < 1) {slideIndex = slides.length}
  	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
  	}
  	for (i = 0; i < dots.length; i++) {
	  	dots[i].className = dots[i].className.replace(" active", "");
  	}
  	slides[slideIndex-1].style.display = "block";  
  	dots[slideIndex-1].className += " active";
}

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

