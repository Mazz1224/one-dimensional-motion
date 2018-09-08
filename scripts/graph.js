class Graph {
	constructor(xGrid, yGrid, xData, yData, xDiv, yDiv) {
		this.pos = createVector(xGrid, yGrid);

		this.div = {x: xDiv, y: yDiv};
		this.data = {x: xData, y: yData};
	}

	render(gridSystem) {
		let x = floor(gridSystem.toCoord(this.pos.x, this.pos.y).x + (gridSystem.toCoord(this.pos.x, this.pos.y).x / 60)),
			y = floor(gridSystem.toCoord(this.pos.x, this.pos.y).y + (gridSystem.toCoord(this.pos.x, this.pos.y).y / 60)),
			localWidth = floor(gridSystem.length.horizontal * (56 / 60)),
			localHeight = floor(gridSystem.length.vertical * (68 / 60));
		//

		stroke(0);
		line(x, y + (localHeight / 2), x + localWidth, y + (localHeight / 2));
		line(x + (localWidth / 15), y, x + (localWidth / 15), y + localHeight);

		for(let i = 0; i < localWidth; i += localWidth / this.div.x) {
			line(x + i, y + (localHeight * (39 / 80)), x + i, y + (localHeight * (41 / 80)));
		}
	}
}
