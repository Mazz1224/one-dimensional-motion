function setup() {
	width = windowWidth;
	height = windowHeight;
	createCanvas(width, height);
}

function draw() {
	background(255);
}


function windowResized() {
	width = windowWidth;
	height = windowHeight;
	resizeCanvas(width, height, true);
}
