let grid,
	graph = [];

function setup() {
	width = windowWidth;
	height = windowHeight;
	createCanvas(width, height);

	grid = new Grid(3, 2);
}

function draw() {
	background(255);

	grid.render();

	for(let i = 0; i < graph.length; i++) {
		graph[i].render(grid);
	}
}


function mousePressed() {
	console.log(grid.toGrid(mouseX, mouseY).x, grid.toGrid(mouseX, mouseY).y);

	graph[graph.length] = new Graph(grid.toGrid(mouseX, mouseY).x, grid.toGrid(mouseX, mouseY).y, null, null);
}

function windowResized() {
	width = windowWidth;
	height = windowHeight;
	resizeCanvas(width, height, true);

	grid.resize();
}
