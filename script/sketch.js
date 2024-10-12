import { sketch } from "https://cdn.skypack.dev/p5js-wrapper";
import { drawNumeral } from "./numeral.js";

let date = new Date();
let hour = getNumerals(date.getHours().toString().split(""));
let minutes = getNumerals(date.getMinutes().toString().split(""));
let seconds = getNumerals(date.getSeconds().toString().split(""));
let numbers = [...hour, ...minutes, ...seconds];

sketch.setup = function () {
	createCanvas(416, 160);
	frameRate(1);
};

function getNumerals(nums) {
	if (nums.length === 1) {
		return [0, Number(nums[0])];
	} else {
		return [Number(nums[0]), Number(nums[1])];
	}
}

sketch.draw = function () {
	date = new Date();
	hour = getNumerals(date.getHours().toString().split(""));
	minutes = getNumerals(date.getMinutes().toString().split(""));
	seconds = getNumerals(date.getSeconds().toString().split(""));
	background(112, 169, 49);
	noStroke();
	drawNumeral(hour[0], 16, 16, hour[0] !== numbers[0]);
	drawNumeral(hour[1], 64, 16, hour[1] !== numbers[1]);
	drawNumeral(":", 112, 16);
	drawNumeral(minutes[0], 160, 16, minutes[0] !== numbers[2]);
	drawNumeral(minutes[1], 208, 16, minutes[1] !== numbers[3]);
	drawNumeral(":", 257, 16);
	drawNumeral(seconds[0], 304, 16, seconds[0] !== numbers[4]);
	drawNumeral(seconds[1], 352, 16, seconds[1] !== numbers[5]);
	numbers = [...hour, ...minutes, ...seconds];
};
