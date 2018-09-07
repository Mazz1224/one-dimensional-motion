//This class defines the grid system that the entire game will be based off of
class Grid {

	//This constructor receives how many divisions the grid will have
	constructor(hDiv, vDiv) {
		if(typeof vDiv == 'undefined') {
			this.div = {horizontal: hDiv, vertical: hDiv};
		} else {
			this.div = {horizontal: hDiv, vertical: vDiv};
		}
		//Sets the retrieved variable to an internal object variable

		//Creates a handy grid length variable
		this.length = {horizontal: floor(width / this.div.horizontal), vertical: floor(height / this.div.vertical)};

		this.dim = {width: floor(width / this.length.horizontal), height: floor(height / this.length.vertical)};


		//The grid will not be shown by default
		this.visibility = false;
	}

	//The code that renders the grid
	render() {
		stroke(0);

		//Creates vertical grid lines for how many divisions there are
		for(let i = 0; i < width; i += this.length.horizontal) {
			//The line position is floored to keep the image clear
			line(floor(i), 0, floor(i), height);
		}

		//Creates horizontal grid lines for how many divisions there are
		for(let i = 0; i < height; i += this.length.vertical) {
			//The line position is floored to keep the image clear
			line(0, floor(i), width, floor(i));
		}
	}


	//Converts a window coordinate to a grid position
	toGrid(xIn, yIn) {
		//Returns the value as a JSON object
		return {x: floor(xIn / this.length.horizontal), y: floor(yIn / this.length.vertical)};
	}

	//Converts a grid position to a window coordinate
	toCoord(xIn, yIn) {
		//Returns the value as a JSON object
		return {x: xIn * this.length.horizontal, y: yIn * this.length.vertical};
	}


	//What gets run whenever a window resize is detected
	resize() {
		//Sets the grid length respectively
		this.length = {horizontal: floor(width / this.div.horizontal), vertical: floor(height / this.div.vertical)};

		this.dim = {width: floor(width / this.length.horizontal), height: floor(height / this.length.vertical)};
	}
}
