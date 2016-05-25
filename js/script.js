var slides = ["slide1", "slide2", "slide3"];
var frame = -1;
function set() {
	frame++;
	if(frame == slides.length) {
    frame = 0;
  }
  document.getElementById(slides[frame]).checked = "checked";
}

function addClickHandler() {
	var clickPoints = document.querySelectorAll(".main-content__radio");
	for (var i = 0; i < clickPoints.length; i++) {
		clickPoints[i].onclick = clickHandler;
	}
}

function clickHandler() {
	var radioId = this.id;
	var slideIndex = +radioId.slice(5) - 1;
	frame = slideIndex;
	clearInterval(timer);
	timer = setInterval(set, 5000);
}

var timer = null;

window.onload = function() {
	set();
	timer = setInterval(set, 5000);
	addClickHandler();
};
