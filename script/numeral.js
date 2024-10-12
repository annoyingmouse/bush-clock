import { sketch } from "https://cdn.skypack.dev/p5js-wrapper";
import "https://cdn.skypack.dev/p5js-wrapper/sound";
import { numerals as numberMaps } from "./numerals.js";
import { MP3s } from "./sounds.js";

let down,
	right_up,
	left_up,
	right,
	left_right,
	left,
	top,
	down_right,
	down_left,
	middle,
	down_left_up,
	down_right_up,
	dotBig,
	rustles = [];

sketch.preload = function () {
	down = loadImage("../image/bottom-half.png");
	right_up = loadImage("../image/bottom-left.png");
	left_up = loadImage("../image/bottom-right.png");
	right = loadImage("../image/left-end.png");
	left_right = loadImage("../image/middle.png");
	left = loadImage("../image/right-end.png");
	top = loadImage("../image/top-half.png");
	down_right = loadImage("../image/top-left.png");
	down_left = loadImage("../image/top-right.png");
	middle = loadImage("../image/vertical-middle.png");
	down_left_up = loadImage("../image/vertical-middle-left.png");
	down_right_up = loadImage("../image/vertical-middle-right.png");
	dotBig = loadImage("../image/dot-big.png");
	for (let i = 0; i < 10; i++) {
		rustles.push(loadSound(MP3s[i]));
	}
};

function checkDirection(grid, row, col) {
	let directions = [];
	// Get the dimensions of the 2D array
	const numRows = grid.length;
	const numCols = grid[0].length;
	// Check UP (above the current element)
	if (row > 0 && grid[row - 1][col]) {
		directions.push("up");
	}
	// Check DOWN (below the current element)
	if (row < numRows - 1 && grid[row + 1][col]) {
		directions.push("down");
	}
	// Check LEFT (left of the current element)
	if (col > 0 && grid[row][col - 1]) {
		directions.push("left");
	}
	// Check RIGHT (right of the current element)
	if (col < numCols - 1 && grid[row][col + 1]) {
		directions.push("right");
	}
	// // Check TOP-LEFT (diagonal up-left)
	// if (row > 0 && col > 0 && grid[row - 1][col - 1] === true) {
	// 	directions.push("top-left");
	// }
	// // Check TOP-RIGHT (diagonal up-right)
	// if (row > 0 && col < numCols - 1 && grid[row - 1][col + 1] === true) {
	// 	directions.push("top-right");
	// }
	// // Check BOTTOM-LEFT (diagonal down-left)
	// if (row < numRows - 1 && col > 0 && grid[row + 1][col - 1] === true) {
	// 	directions.push("bottom-left");
	// }
	// // Check BOTTOM-RIGHT (diagonal down-right)
	// if (row < numRows - 1 && col < numCols - 1 && grid[row + 1][col + 1] === true) {
	// 	directions.push("bottom-right");
	// }
	return directions;
}

function drawHedge(hedgeMap, x, y) {
	let level;
	for (let i = 0; i < hedgeMap.length; i++) {
		for (let j = 0; j < hedgeMap[i].length; j++) {
			if (hedgeMap[i][j] === 1) {
				const directions = checkDirection(hedgeMap, i, j).sort().join("_");
				if (i % 2 === 0) {
					level =
						i === 0 ? (i === 1 ? 32 : 0) : i === 2 ? 48 : i === 3 ? 80 : 96;
					if (directions === "down_right") {
						image(down_right, x + j * 16, y + level);
					}
					if (directions === "left_right") {
						image(left_right, x + j * 16, y + level);
					}
					if (directions === "down_left") {
						image(down_left, x + j * 16, y + level);
					}
					if (directions === "right_up") {
						image(right_up, x + j * 16, y + level);
					}
					if (directions === "left_up") {
						image(left_up, x + j * 16, y + level);
					}
					if (directions === "down_right_up") {
						image(down_right_up, x + j * 16, y + level);
					}
					if (directions === "down_left_up") {
						image(down_left_up, x + j * 16, y + level);
					}
					if (directions === "down_up") {
						image(middle, x + j * 16, y + level);
						image(middle, x + j * 16, y + level + 16);
					}
					if (directions === "left") {
						image(left, x + j * 16, y + level);
					}
					if (directions === "right") {
						image(right, x + j * 16, y + level);
					}
					if (directions === "up") {
						image(middle, x + j * 16, y + level);
						image(down, x + j * 16, y + level + 16);
					}
					if (directions === "down") {
						image(top, x + j * 16, y + level);
						image(middle, x + j * 16, y + level + 16);
					}
				} else {
					level = i === 1 ? 32 : 80;
					if (directions === "down_up") {
						image(middle, x + j * 16, y + level);
					}
				}
			}
		}
	}
}

export function drawNumeral(num, x, y, sound) {
	const numerals = {
		0: (x, y, sound, num) => {
			// rustleSoundZero.play();
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		1: (x, y, sound, num) => {
			// rustleSoundOne.play();
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		2: (x, y, sound, num) => {
			// rustleSoundTwo.play();
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		3: (x, y, sound, num) => {
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		4: (x, y, sound, num) => {
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		5: (x, y, sound, num) => {
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		6: (x, y, sound, num) => {
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		7: (x, y, sound, num) => {
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		8: (x, y, sound, num) => {
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		9: (x, y, sound, num) => {
			rustles[num].play();
			drawHedge(numberMaps[num], x, y);
		},
		":": (x, y) => {
			image(dotBig, x + 8, y + 24);
			image(dotBig, x + 8, y + 64);
		},
	};
	numerals[num](x, y, sound, num);
}
