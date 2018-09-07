class Graph {
	constructor(xGrid, yGrid, xData, yData) {
		this.pos = createVector(xGrid, yGrid);

		this.data = {x: xData, y: yData};
	}

	render(gridSystem) {
		let x = gridSystem.toCoord(this.pos.x, this.pos.y).x,
			y = gridSystem.toCoord(this.pos.x, this.pos.y).y,
			localWidth = gridSystem.length.horizontal,
			localHeight = gridSystem.length.vertical;
		//
		
		fill(255, 0, 0);
		rect(x, y, localWidth, localHeight);
		
		stroke(0);
		line(x, y, x + localWidth, y + localHeight);
	}
}