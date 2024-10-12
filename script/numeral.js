import { sketch } from "https://cdn.skypack.dev/p5js-wrapper";
import "https://cdn.skypack.dev/p5js-wrapper/sound";
import { numerals as numberMaps } from "./numerals.js";
import {
	rustleSoundZeroMP3,
	rustleSoundOneMP3,
	rustleSoundTwoMP3,
	rustleSoundThreeMP3,
	rustleSoundFourMP3,
	rustleSoundFiveMP3,
	rustleSoundSixMP3,
	rustleSoundSevenMP3,
	rustleSoundEightMP3,
	rustleSoundNineMP3,
} from "./sounds.js";

let bottom,
	bottomProper,
	bottomHalf,
	bottomLeft,
	bottomRight,
	leftEnd,
	middle,
	rightEnd,
	top,
	topHalf,
	topLeft,
	topRight,
	verticalMiddle,
	verticalMiddleLeft,
	verticalMiddleRight,
	dot,
	dotBig,
	rustleSoundZero,
	rustleSoundOne,
	rustleSoundTwo,
	rustleSoundThree,
	rustleSoundFour,
	rustleSoundFive,
	rustleSoundSix,
	rustleSoundSeven,
	rustleSoundEight,
	rustleSoundNine;

sketch.preload = function () {
	bottom = loadImage("../image/bottom.png");
	bottomProper = loadImage("../image/bottom-proper.png");
	bottomHalf = loadImage("../image/bottom-half.png");
	bottomLeft = loadImage("../image/bottom-left.png");
	bottomRight = loadImage("../image/bottom-right.png");
	leftEnd = loadImage("../image/left-end.png");
	middle = loadImage("../image/middle.png");
	rightEnd = loadImage("../image/right-end.png");
	top = loadImage("../image/top.png");
	topHalf = loadImage("../image/top-half.png");
	topLeft = loadImage("../image/top-left.png");
	topRight = loadImage("../image/top-right.png");
	verticalMiddle = loadImage("../image/vertical-middle.png");
	verticalMiddleLeft = loadImage("../image/vertical-middle-left.png");
	verticalMiddleRight = loadImage("../image/vertical-middle-right.png");
	dot = loadImage("../image/dot.png");
	dotBig = loadImage("../image/dot-big.png");
	rustleSoundZero = loadSound(rustleSoundZeroMP3);
	rustleSoundOne = loadSound(rustleSoundOneMP3);
	rustleSoundTwo = loadSound(rustleSoundTwoMP3);
	rustleSoundThree = loadSound(rustleSoundThreeMP3);
	rustleSoundFour = loadSound(rustleSoundFourMP3);
	rustleSoundFive = loadSound(rustleSoundFiveMP3);
	rustleSoundSix = loadSound(rustleSoundSixMP3);
	rustleSoundSeven = loadSound(rustleSoundSevenMP3);
	rustleSoundEight = loadSound(rustleSoundEightMP3);
	rustleSoundNine = loadSound(rustleSoundNineMP3);
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
	//
	// // Check TOP-RIGHT (diagonal up-right)
	// if (row > 0 && col < numCols - 1 && grid[row - 1][col + 1] === true) {
	// 	directions.push("top-right");
	// }
	//
	// // Check BOTTOM-LEFT (diagonal down-left)
	// if (row < numRows - 1 && col > 0 && grid[row + 1][col - 1] === true) {
	// 	directions.push("bottom-left");
	// }
	//
	// // Check BOTTOM-RIGHT (diagonal down-right)
	// if (row < numRows - 1 && col < numCols - 1 && grid[row + 1][col + 1] === true) {
	// 	directions.push("bottom-right");
	// }
	return directions;
}

function drawHedge(hedgeMap, x, y) {
	let level
	for (let i = 0; i < hedgeMap.length; i++) {
		for (let j = 0; j < hedgeMap[i].length; j++) {
			if (hedgeMap[i][j] === 1) {
				const directions = checkDirection(hedgeMap, i, j).sort().join("-");
				if (i % 2 === 0) {
					level = i === 0 ? 0 : i === 2 ? 48 : 96;
					if (directions === "down-right") {
						image(topLeft, x + j * 16, y + level);
					}
					if (directions === "left-right") {
						image(middle, x + j * 16, y + level);
					}
					if (directions === "down-left") {
						image(topRight, x + j * 16, y + level);
					}
					if (directions === "right-up") {
						image(bottomLeft, x + j * 16, y + level);
					}
					if (directions === "left-up") {
						image(bottomRight, x + j * 16, y + level);
					}
					if(directions === "down-right-up") {
						image(verticalMiddleRight, x + j * 16, y + level);
					}
					if(directions === "down-left-up") {
						image(verticalMiddleLeft, x + j * 16, y + level);
					}
					if(directions === "down-up") {
						image(verticalMiddle, x + j * 16, y + level);
						image(verticalMiddle, x + j * 16, (y + level) + 16);
					}
					if(directions === "left") {
						image(rightEnd, x + j * 16, y + level);
					}
					if(directions === "right") {
						image(leftEnd, x + j * 16, y + level);
					}
					if(directions === "up") {
						image(verticalMiddle, x + j * 16, y + level);
						image(bottomHalf, x + j * 16, (y + level) + 16);
					}
					if(directions === "down") {
						image(topHalf, x + j * 16, (y + level));
						image(verticalMiddle, x + j * 16, y + level + 16);
					}
					console.log(directions)
				} else {
					level = i === 1 ? 32 : 80;
					if(directions === "down-up") {
						image(verticalMiddle, x + j * 16, y + level);
					}
				}
			}
		}
	}
}

export function drawNumeral(num, x, y, sound) {
	const numerals = {
		0: (x, y, sound, num) => {
			if (sound) {
				rustleSoundZero.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		1: (x, y, sound, num) => {
			if (sound) {
				rustleSoundOne.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		2: (x, y, sound, num) => {
			if (sound) {
				rustleSoundTwo.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		3: (x, y, sound, num) => {
			if (sound) {
				rustleSoundThree.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		4: (x, y, sound, num) => {
			if (sound) {
				rustleSoundFour.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		5: (x, y, sound, num) => {
			if (sound) {
				rustleSoundFive.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		6: (x, y, sound, num) => {
			if (sound) {
				rustleSoundSix.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		7: (x, y, sound, num) => {
			if (sound) {
				rustleSoundSeven.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		8: (x, y, sound, num) => {
			if (sound) {
				rustleSoundEight.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		9: (x, y, sound, num) => {
			if (sound) {
				rustleSoundNine.play();
			}
			drawHedge(numberMaps[num], x, y);
		},
		":": (x, y) => {
			image(dotBig, x + 8, y + 24);
			image(dotBig, x + 8, y + 64);
		},
	};
	numerals[num](x, y, sound, num);
}
