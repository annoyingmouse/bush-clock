import { sketch } from "https://cdn.skypack.dev/p5js-wrapper";
import "https://cdn.skypack.dev/p5js-wrapper/sound";
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

let proper = 0;

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

export function drawNumeral(num, x, y, sound) {
	const numerals = {
		0: (x, y, sound) => {
			if (sound) {
				rustleSoundZero.play();
			}
			image(topLeft, x, y);
			image(middle, x + 16, y);
			image(topRight, x + 32, y);
			image(verticalMiddle, x, y + 32);
			image(verticalMiddle, x, y + 48);
			image(verticalMiddle, x, y + 64);
			image(verticalMiddle, x, y + 80);
			image(verticalMiddle, x + 32, y + 32);
			image(verticalMiddle, x + 32, y + 48);
			image(verticalMiddle, x + 32, y + 64);
			image(verticalMiddle, x + 32, y + 80);
			image(bottomLeft, x, y + 96);
			image(middle, x + 16, y + 96);
			image(bottomRight, x + 32, y + 96);
		},
		1: (x, y, sound) => {
			if (sound) {
				rustleSoundOne.play();
			}
			image(topHalf, x + 16, y);
			image(verticalMiddle, x + 16, y + 16);
			image(verticalMiddle, x + 16, y + 32);
			image(verticalMiddle, x + 16, y + 48);
			image(verticalMiddle, x + 16, y + 64);
			image(verticalMiddle, x + 16, y + 80);
			image(verticalMiddle, x + 16, y + 96);
			image(bottomHalf, x + 16, y + 112);
		},
		2: (x, y, sound) => {
			if (sound) {
				rustleSoundTwo.play();
			}
			image(leftEnd, x, y);
			image(middle, x + 16, y);
			image(topRight, x + 32, y);
			image(verticalMiddle, x + 32, y + 32);
			image(topLeft, x, y + 48);
			image(middle, x + 16, y + 48);
			image(bottomRight, x + 32, y + 48);
			image(verticalMiddle, x, y + 64);
			image(verticalMiddle, x, y + 80);
			image(bottomLeft, x, y + 96);
			image(middle, x + 16, y + 96);
			image(rightEnd, x + 32, y + 96);
		},
		3: (x, y, sound) => {
			if (sound) {
				rustleSoundThree.play();
			}
			image(leftEnd, x, y);
			image(middle, x + 16, y);
			image(topRight, x + 32, y);
			image(verticalMiddle, x + 32, y + 32);
			image(leftEnd, x + 16, y + 48);
			image(verticalMiddleLeft, x + 32, y + 48);
			image(verticalMiddle, x + 32, y + 80);
			image(leftEnd, x, y + 96);
			image(middle, x + 16, y + 96);
			image(bottomRight, x + 32, y + 96);
		},
		4: (x, y, sound) => {
			if (sound) {
				rustleSoundFour.play();
			}
			image(topHalf, x, y);
			image(verticalMiddle, x, y + 16);
			image(topHalf, x + 32, y);
			image(verticalMiddle, x + 32, y + 16);
			image(verticalMiddle, x, y + 32);
			image(verticalMiddle, x + 32, y + 32);
			image(bottomLeft, x, y + 48);
			image(middle, x + 16, y + 48);
			image(verticalMiddleLeft, x + 32, y + 48);
			image(verticalMiddle, x + 32, y + 80);
			image(verticalMiddle, x + 32, y + 96);
			image(bottomHalf, x + 32, y + 112);
		},
		5: (x, y, sound) => {
			if (sound) {
				rustleSoundFive.play();
			}
			image(topLeft, x, y);
			image(middle, x + 16, y);
			image(rightEnd, x + 32, y);
			image(verticalMiddle, x, y + 32);
			image(bottomLeft, x, y + 48);
			image(middle, x + 16, y + 48);
			image(topRight, x + 32, y + 48);
			image(verticalMiddle, x + 32, y + 80);
			image(leftEnd, x, y + 96);
			image(middle, x + 16, y + 96);
			image(bottomRight, x + 32, y + 96);
		},
		6: (x, y, sound) => {
			if (sound) {
				rustleSoundSix.play();
			}
			image(topLeft, x, y);
			image(middle, x + 16, y);
			image(rightEnd, x + 32, y);
			image(verticalMiddle, x, y + 32);
			image(verticalMiddleRight, x, y + 48);
			image(middle, x + 16, y + 48);
			image(topRight, x + 32, y + 48);
			image(verticalMiddle, x, y + 80);
			image(verticalMiddle, x + 32, y + 80);
			image(bottomLeft, x, y + 96);
			image(middle, x + 16, y + 96);
			image(bottomRight, x + 32, y + 96);
		},
		7: (x, y, sound) => {
			if (sound) {
				rustleSoundSeven.play();
			}
			image(leftEnd, x, y);
			image(middle, x + 16, y);
			image(topRight, x + 32, y);
			image(verticalMiddle, x + 32, y + 32);
			image(verticalMiddle, x + 32, y + 48);
			image(verticalMiddle, x + 32, y + 64);
			image(verticalMiddle, x + 32, y + 80);
			image(verticalMiddle, x + 32, y + 96);
			image(bottomHalf, x + 32, y + 112);
		},
		8: (x, y, sound) => {
			if (sound) {
				rustleSoundEight.play();
			}
			image(topLeft, x, y);
			image(middle, x + 16, y);
			image(topRight, x + 32, y);
			image(verticalMiddle, x, y + 32);
			image(verticalMiddle, x + 32, y + 32);
			image(verticalMiddleRight, x, y + 48);
			image(middle, x + 16, y + 48);
			image(verticalMiddleLeft, x + 32, y + 48);
			image(verticalMiddle, x, y + 80);
			image(verticalMiddle, x + 32, y + 80);
			image(bottomLeft, x, y + 96);
			image(middle, x + 16, y + 96);
			image(bottomRight, x + 32, y + 96);
		},
		9: (x, y, sound) => {
			if (sound) {
				rustleSoundNine.play();
			}
			image(topLeft, x, y);
			image(middle, x + 16, y);
			image(topRight, x + 32, y);
			image(verticalMiddle, x, y + 32);
			image(verticalMiddle, x + 32, y + 32);
			image(bottomLeft, x, y + 48);
			image(middle, x + 16, y + 48);
			image(verticalMiddleLeft, x + 32, y + 48);
			image(verticalMiddle, x + 32, y + 80);
			image(leftEnd, x, y + 96);
			image(middle, x + 16, y + 96);
			image(bottomRight, x + 32, y + 96);
		},
		":": (x, y) => {
			image(dotBig, x + 8, y + 24);
		},
	};
	numerals[num](x, y, sound);
	proper++;
	if (proper === 3) {
		proper = 0;
	}
}
